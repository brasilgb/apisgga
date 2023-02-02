import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface MetaAttributes {
  idMeta?: number;
  cicloId?: number
  semana?: number;
  dataInicial?: Date;
  dataFinal?: Date;
  eclosao?: number;
  fertilidade?: number;
  producao?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MetaInput extends Optional<MetaAttributes, 'idMeta'> { }
export interface MetaOutput extends Required<MetaAttributes> { }

class Meta extends Model<MetaAttributes, MetaInput> implements MetaAttributes {
  public idMeta?: number;
  public cicloId?: number
  public semana?: number;
  public dataInicial?: Date;
  public dataFinal?: Date;
  public eclosao?: number;
  public fertilidade?: number;
  public producao?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Meta.init({
  idMeta: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  cicloId: {
    allowNull: false,
    type: DataTypes.BIGINT
  },
  semana: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  dataInicial: {
    allowNull: false,
    type: DataTypes.DATE
  },
  dataFinal: {
    allowNull: true,
    type: DataTypes.DATE
  },
  eclosao: {
    allowNull: true,
    type: DataTypes.NUMBER
  },
  fertilidade: {
    allowNull: true,
    type: DataTypes.NUMBER
  },
  producao: {
    allowNull: true,
    type: DataTypes.NUMBER
  }
}, {
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Meta;