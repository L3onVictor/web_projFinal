import { Router } from "express";
import { db } from "../database/db.js";

const router = Router();

// Rota criar agendamento
router.post("/", async (req, res) => {
    const { servico, nome, data, hora, telefone, observacao} = req.body;

    if (!servico || !nome || !data || !hora || !telefone) {
        return res.status(400).json({ erro: "Todos os campos obrigatórios devem ser preenchidos." });
    }

    try {
        await db.run(
            "INSERT INTO agendamentos (servico, nome, data, hora, telefone, observacao) VALUES (?, ?, ?, ?, ?, ?)",
            [servico, nome, data, hora, telefone, observacao || ""]
        );
        res.status(201).json({ mensagem: "Agendamento criado com sucesso!" });
    } catch (error) {
        console.error("Erro ao salvar no banco:", error);
        res.status(500).json({ erro: "Erro ao criar o agendamento." });
    }
});

// Rota listar agendamentos
router.get("/", async (req, res) => {
    try {
        const agendamentos = await db.all("SELECT * FROM agendamentos");
        res.json(agendamentos);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar os agendamentos." });
    }
});


router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.run("DELETE FROM agendamentos WHERE id = ?", [id]);

        if (result.changes === 0) {
            return res.status(404).json({ erro: "Agendamento não encontrado." });
        }

        res.json({ mensagem: "Agendamento removido com sucesso!" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao excluir o agendamento." });
    }
});

export default router;
