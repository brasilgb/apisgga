import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import Coleta from "./Coleta";
import Lote from "./Lote";

interface AviarioAttributes {
  idAviario?: number;
  cicloId?: number
  loteId?: number
  aviario?: string;
  dataEntrada?: Date;
  box1Femea?: number;
  box2Femea?: number;
  box3Femea?: number;
  box4Femea?: number;
  box1Macho?: number;
  box2Macho?: number;
  box3Macho?: number;
  box4Macho?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AviarioInput extends Optional<AviarioAttributes, 'idAviario'> { }
export interface AviarioOutput extends Required<AviarioAttributes> { }

class Aviario extends Model<AviarioAttributes, AviarioInput> implements AviarioAttributes {
  public idAviario?: number;
  public cicloId?: number
  public loteId?: number
  public aviario?: string;
  public dataEntrada?: Date;
  public box1Femea?: number;
  public box2Femea?: number;
  public box3Femea?: number;
  public box4Femea?: number;
  public box1Macho?: number;
  public box2Macho?: number;
  public box3Macho?: number;
  public box4Macho?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
};

Aviario.init({
  idAviario: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idAviario',
    type: DataTypes.BIGINT,
  },
  cicloId: {
    allowNull: true,
    type: DataTypes.BIGINT
  },
  loteId: {
    allowNull: true,
    type: DataTypes.BIGINT
  },
  aviario: {
    allowNull: false,
    type: DataTypes.STRING
  },
  dataEntrada: {
    allowNull: false,
    type: DataTypes.DATE
  },
  box1Femea: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  box2Femea: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  box3Femea: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  box4Femea: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  box1Macho: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  box2Macho: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  box3Macho: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  box4Macho: {
    allowNull: true,
    type: DataTypes.INTEGER
  }
}, {
  modelName: 'Aviario',
  tableName: 'aviarios',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Aviario;

Aviario.hasMany(Coleta, {
  sourceKey: 'idAviario',
  foreignKey: 'aviarioId',
  as: 'coletas'
})

Coleta.belongsTo(Aviario, {
  foreignKey: 'aviarioId',
  as: 'aviarios'
})