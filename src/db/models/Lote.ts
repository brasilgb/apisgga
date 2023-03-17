import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";
import Aviario from "./Aviario";
import Coleta from "./Coleta";

interface LoteAttributes {
  idLote?: Number;
  lote?: String;
  cicloId?: number;
  dataEntrada?: Date;
  femea?: Number;
  macho?: Number;
  dataCapitalizacao?: Date;
  femeaCapitalizada?: Number;
  machoCapitalizado?: Number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface LoteInput extends Optional<LoteAttributes, 'idLote'> { }
export interface LoteOutput extends Required<LoteAttributes> { }

class Lote extends Model<LoteAttributes, LoteInput> implements LoteAttributes {
  public idLote?: number;
  public lote?: String;
  public cicloId?: number;
  public dataEntrada?: Date;
  public femea?: number;
  public macho?: number;
  public dataCapitalizacao?: Date;
  public femeaCapitalizada?: number;
  public machoCapitalizado?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

Lote.init({
  idLote: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idLote',
    type: DataTypes.BIGINT
  },
  lote: {
    allowNull: false,
    type: DataTypes.STRING
  },
  cicloId: {
    allowNull: false,
    type: DataTypes.BIGINT
  },
  dataEntrada: {
    allowNull: false,
    type: DataTypes.DATE
  },
  femea: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  macho: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  dataCapitalizacao: {
    allowNull: true,
    type: DataTypes.DATE
  },
  femeaCapitalizada: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  machoCapitalizado: {
    allowNull: true,
    type: DataTypes.INTEGER
  }
}, {
  modelName: 'Lote',
  tableName: 'lotes',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Lote;

Lote.hasMany(Aviario, {
  sourceKey: 'idLote',
  foreignKey: 'loteId',
  as: 'aviarios'
})

Aviario.belongsTo(Lote, {
  foreignKey: 'loteId',
  as: 'lotes'
})

Lote.hasMany(Coleta, {
  sourceKey: 'idLote',
  foreignKey: 'loteId',
  as: 'coletas'
})

Coleta.belongsTo(Lote, {
  foreignKey: 'loteId',
  as: 'lotes'
})