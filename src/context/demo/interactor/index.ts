
import DemoSql from '../infraestructure/persistense/DemoSqlRepository';
import findDemo from './find/FindDemo';

const demoRepository = new DemoSql();

export default findDemo(demoRepository);
