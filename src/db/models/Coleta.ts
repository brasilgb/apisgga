import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface ColetaAttributes {
  idColeta?: Number;
  cicloId?: number;
  loteId?: number;
  aviarioId?: number;
  coleta?: number;
  dataColeta?: Date;
  dataSearch?: Date;
  limposNinho?: number;
  sujosNinho?: number;
  ovosCama?: number;
  duasGemas?: number;
  refugos?: number;
  pequenos?: number;
  cascaFina?: number;
  frios?: number;
  esmagadosQuebrados?: number;
  camaNaoIncubaveis?: number;
  deformados?: number;
  sujosDeCama?: number;
  trincados?: number;
  eliminados?: number;
  incubaveisBons?: number;
  incubaveis?: number;
  comerciais?: number;
  posturaDia?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ColetaInput extends Optional<ColetaAttributes, 'idColeta'> { }
export interface ColetaOutput extends Required<ColetaAttributes> { }

class Coleta extends Model<ColetaAttributes, ColetaInput> implements ColetaAttributes {
  public idColeta?: Number;
  public cicloId?: number;
  public loteId?: number;
  public aviarioId?: number;
  public coleta?: number;
  public dataColeta?: Date;
  public dataSearch?: Date;
  public limposNinho?: number;
  public sujosNinho?: number;
  public ovosCama?: number;
  public duasGemas?: number;
  public refugos?: number;
  public pequenos?: number;
  public cascaFina?: number;
  public frios?: number;
  public esmagadosQuebrados?: number;
  public camaNaoIncubaveis?: number;
  public deformados?: number;
  public sujosDeCama?: number;
  public trincados?: number;
  public eliminados?: number;
  public incubaveisBons?: number;
  public incubaveis?: number;
  public comerciais?: number;
  public posturaDia?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}
Coleta.init({
  idColeta: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idColeta',
    type: DataTypes.BIGINT,
  },
  cicloId: {
    allowNull: false,
    type: DataTypes.BIGINT
  },
  loteId: {
    allowNull: false,
    type: DataTypes.BIGINT
  },
  aviarioId: {
    allowNull: false,
    type: DataTypes.BIGINT
  },
  coleta: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  dataColeta: {
    allowNull: false,
    type: DataTypes.DATE
  },
  dataSearch: {
    allowNull: false,
    type: DataTypes.DATEONLY
  },
  limposNinho: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  sujosNinho: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  ovosCama: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  duasGemas: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  refugos: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  pequenos: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  cascaFina: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  frios: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  esmagadosQuebrados: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  camaNaoIncubaveis: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  deformados: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  sujosDeCama: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  trincados: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  eliminados: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  incubaveisBons: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  incubaveis: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  comerciais: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  posturaDia: {
    allowNull: false,
    type: DataTypes.NUMBER
  }
}, {
  modelName: 'Coleta',
  tableName: 'coletas',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Coleta;