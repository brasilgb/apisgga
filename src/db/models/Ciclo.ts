import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import Meta from "./Meta";

interface CicloAttributes {
  idCiclo?: number;
  dataInicial?: Date;
  semanaInicial?: number;
  dataFinal?: Date;
  semanaFinal?: number;
  ativo?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CicloInput extends Optional<CicloAttributes, 'idCiclo'> { }
export interface CicloOutput extends Required<CicloAttributes> { }

class Ciclo extends Model<CicloAttributes, CicloInput> implements CicloAttributes {
  public idCiclo?: number;
  public dataInicial?: Date;
  public semanaInicial?: number;
  public dataFinal?: Date;
  public semanaFinal?: number;
  public ativo?: boolean;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Ciclo.init({
  idCiclo: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idCiclo',
    type: DataTypes.BIGINT,
  },
  dataInicial: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  semanaInicial: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  dataFinal: {
    allowNull: true,
    type: DataTypes.DATEONLY
  },
  semanaFinal: {
    allowNull: true,
    type: DataTypes.NUMBER
  },
  ativo: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}, {
  modelName: 'Ciclo',
  tableName: 'ciclos',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Ciclo;

Ciclo.hasMany(Meta, {
  sourceKey: 'idCiclo',
  foreignKey: 'cicloId',
  as: 'metas'
})