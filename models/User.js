import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dept: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    id_role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3,
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    remember_token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    freezeTableName: true,
    timestamps: true,
});

export default User;