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
  box1Femea?: any;
  box2Femea?: any;
  box3Femea?: any;
  box4Femea?: any;
  box1Macho?: any;
  box2Macho?: any;
  box3Macho?: any;
  box4Macho?: any;
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
  public box1Femea?: any;
  public box2Femea?: any;
  public box3Femea?: any;
  public box4Femea?: any;
  public box1Macho?: any;
  public box2Macho?: any;
  public box3Macho?: any;
  public box4Macho?: any;
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