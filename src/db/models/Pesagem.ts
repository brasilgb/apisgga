import { DataTypes, Model, ModelStatic, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface PesagemAttributes {
  idPesagem?: number;
  cicloId?: number
  loteId?: number
  aviarioId?: number;
  dataPesagem?: Date;
  semana?: number;
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

export interface PesagemInput extends Optional<PesagemAttributes, 'idPesagem'> { }
export interface PesagemOutput extends Required<PesagemAttributes> { }

class Pesagem extends Model<PesagemAttributes, PesagemInput> implements PesagemAttributes {
  public idPesagem?: number;
  public cicloId?: number
  public loteId?: number
  public aviarioId?: number;
  public dataPesagem?: Date;
  public semana?: number;
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

Pesagem.init({
  idPesagem: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idPesagem',
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
    allowNull: false,
    type: DataTypes.BIGINT
  },
  dataPesagem: {
    allowNull: false,
    type: DataTypes.DATE
  },
  semana: {
    allowNull: false,
    type: DataTypes.INTEGER
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
  modelName: 'Pesagem',
  tableName: 'pesagens',
  timestamps: true,
  sequelize: connection,
  underscored: false
});

export default Pesagem;