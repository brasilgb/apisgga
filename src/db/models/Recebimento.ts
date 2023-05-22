'use strict';

import { DataTypes, Model, Optional } from "sequelize";
import connection from "../../config/dbConnect";

interface RecebimentoAttributes {
  idRecebimento?: number,
  cicloId?: number,
  loteId?: number,
  dataSearch?: Date,
  dataRecebimento?: Date,
  femea?: number,
  macho?: number,
  notaFiscal?: number
}
export interface RecebimentoInput extends Optional<RecebimentoAttributes, 'idRecebimento'> { }
export interface RecebimentoOutput extends Required<RecebimentoAttributes> { }

class Recebimento extends Model<RecebimentoAttributes, RecebimentoInput> implements RecebimentoAttributes {
  public idRecebimento?: number;
  public cicloId?: number;
  public loteId?: number;
  public dataSearch?: Date;
  public dataRecebimento?: Date;
  public femea?: number;
  public macho?: number;
  public notaFiscal?: number
}

Recebimento.init({
  idRecebimento: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'idRecebimento',
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
  dataSearch: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
  dataRecebimento: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  femea: {
    allowNull: false,
    type: DataTypes.FLOAT(10, 3),
  },
  macho: {
    allowNull: false,
    type: DataTypes.FLOAT(10, 3),
  },
  notaFiscal: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
}, {
  modelName: 'Recebimento',
  tableName: 'recebimentos',
  timestamps: true,
  sequelize: connection,
  underscored: false
});
export default Recebimento;