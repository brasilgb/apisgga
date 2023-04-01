import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import { getEnvironmentData } from "worker_threads";
import Ciclo from "./Ciclo";

interface EnvioAttributes {
  idEnvio?: number;
  dataEnvio?: Date;
  cicloId?: number
  incubaveis?: number;
  comerciais?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EnvioInput extends Optional<EnvioAttributes, 'idEnvio'> { }
export interface EnvioOutput extends Required<EnvioAttributes> { }

class Envio extends Model<EnvioAttributes, EnvioInput> implements EnvioAttributes {
  public idEnvio?: number;
  public dataEnvio?: Date;
  public cicloId?: number
  public incubaveis?: number;
  public comerciais?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
};
Envio.init({
  idEnvio: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idEnvio',
    type: DataTypes.BIGINT,
  },
  dataEnvio: {
    allowNull: false,
    type: DataTypes.DATE
  },
  cicloId: {
    allowNull: true,
    type: DataTypes.BIGINT
  },
  incubaveis: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  comerciais: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}, {
  modelName: 'Envio',
  tableName: 'envios',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Envio;

Ciclo.hasMany(Envio, {
  sourceKey: 'idCiclo',
  foreignKey: 'cicloId',
  as: 'envios'
})

Envio.belongsTo(Ciclo, {
  foreignKey: 'cicloId',
  as: 'ciclos'
})