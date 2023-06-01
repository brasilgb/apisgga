import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import connection from "../../config/dbConnect";


interface MortalidadeAttributes {
  idMortalidade?: number;
  cicloId?: number
  loteId?: number
  aviarioId?: string;
  dataMorte?: Date;
  causaMorte?: string;
  outraCausa?: string;
  box1Femea?: number;
  box2Femea?: number;
  box3Femea?: number;
  box4Femea?: number;
  box1Macho?: number;
  box2Macho?: number;
  box3Macho?: number;
  box4Macho?: number;
  totalFemeas?: number;
  totalMachos?: number;
  totalAves?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MortalidadeInput extends Optional<MortalidadeAttributes, 'idMortalidade'> { }
export interface MortalidadeOutput extends Required<MortalidadeAttributes> { }

class Mortalidade extends Model<MortalidadeAttributes, MortalidadeInput> implements MortalidadeAttributes {
  public idMortalidade?: number;
  public cicloId?: number
  public loteId?: number
  public aviarioId?: string;
  public dataMorte?: Date;
  public causaMorte?: string;
  public outraCausa?: string;
  public box1Femea?: number;
  public box2Femea?: number;
  public box3Femea?: number;
  public box4Femea?: number;
  public box1Macho?: number;
  public box2Macho?: number;
  public box3Macho?: number;
  public box4Macho?: number;
  public totalFemeas?: number;
  public totalMachos?: number;
  public totalAves?: number;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
};

Mortalidade.init({
  idMortalidade: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idMortalidade',
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
  aviarioId: {
    allowNull: true,
    type: DataTypes.BIGINT
  },
  dataMorte: {
    allowNull: true,
    type: DataTypes.DATEONLY
  },
  causaMorte: {
    allowNull: true,
    type: DataTypes.STRING
  },
  outraCausa: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  box1Femea: {
    allowNull: true,
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
    allowNull: true,
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
  },
  totalFemeas: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  totalMachos: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  totalAves: {
    allowNull: true,
    type: DataTypes.INTEGER
  }
}, {
  modelName: 'Mortalidade',
  tableName: 'mortalidades',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Mortalidade;
