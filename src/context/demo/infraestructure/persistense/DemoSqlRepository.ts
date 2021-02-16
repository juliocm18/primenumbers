
import SQLServer from '../../../shared/infraestructure/persistence/sql/SqlClient';
import Demo from '../../domain/demo.model';
import DemoRepository from '../../repository/demo.repository';


class DemoSql implements DemoRepository {

  public async getById(id: number): Promise<Demo> {
    const response : any = await SQLServer.executeQuery("select * from demo");
    return response.recordsets[0];
  }

}

export default DemoSql;
