import User from "../models/User.js";
export const getAll = async(req, res) => {
    try{
        const response = await User.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
};
export const getById = async(req, res) => {
    try{
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
};
export const store = async (req, res) => {
    try {
      // Mendapatkan data pengguna dari body permintaan
      const userData = req.body;
      // Menyimpan data pengguna baru ke database
      const newUser = await User.create(userData);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = req.body;

        // Pastikan user dengan id yang diberikan ada sebelum mencoba memperbarui
        const existingUser = await User.findByPk(id);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        // Lakukan pembaruan data
        await User.update(userData, {
            where: { id: id }
        });

        // Ambil data user setelah diperbarui
        const updatedUser = await User.findByPk(id);

        res.status(200).json(updatedUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;

        const existingUser = await User.findByPk(id);
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        await User.destroy({
            where: { id: id }
        });

        res.status(204).end();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
