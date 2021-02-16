
import Demo from '../../domain/demo.model';
import DemoRepository from '../../repository/demo.repository'

const findDemo = ( demoRepository: DemoRepository) => async (id: number) => {
  const demo: Demo = await demoRepository.getById(id);
  return demo;
};

export default findDemo;
