import Demo from "../domain/demo.model";

interface DemoRepository {
  getById(id: number): Promise<Demo>;
}
export default DemoRepository;
