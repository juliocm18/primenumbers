import sql = require("mssql");

export default class SQLServer {
  config = {
    user: "sa",
    password: "1234",
    server: "localhost",
    database: "atrapalodb",
    requestTimeout: 60000,
    options: {
      enableArithAbort: true,
      encrypt: true
    }
  };

  private static _instance: SQLServer;
  cnn: sql.ConnectionPool;
  conectado: boolean = false;

  constructor() {
    this.cnn = new sql.ConnectionPool(this.config);
    this.connect();
  }
  public static get instance() {
    return this._instance || (this._instance = new this());
  }
  public static executeQuery = async (query: string) => {
    let result = await SQLServer.instance.cnn.request().query(query);
    return result;
  }

  private connect = async () => {
    this.cnn.connect().then(pool => {
      console.log("Base de Datos online");
    }).catch(error => {
      console.log("Error de Conexion:", error);
      return;
    })
  }

  public static initTransaction = async () => {
    const transaction = new sql.Transaction(SQLServer.instance.cnn);
    return await transaction.begin();
  }

  public static requestTransaction = async (transaction: sql.Transaction) => {
    return new sql.Request(transaction);
  }

}
