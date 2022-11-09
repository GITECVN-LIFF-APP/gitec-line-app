import { Button, Input } from '@components';
import { VARIANTS } from '@enums';

export const Page1 = () => (
  <>
    <h2>Heading</h2>
    <div className="container">
      <div className=" d-flex gap-2">
        <Input
          id="field-1"
          name="field-1"
          label="Field 1"
          type="text"
          defaultValue=""
        />
        <Input
          id="field-2"
          name="field-2"
          label="Field 2"
          type="text"
          defaultValue=""
        />
      </div>
      <div className=" d-flex gap-2">
        <Input
          id="field-1"
          name="field-1"
          label="Field 1"
          type="text"
          defaultValue=""
        />
        <Input
          id="field-2"
          name="field-2"
          label="Field 2"
          type="text"
          defaultValue=""
        />
      </div>
      <p className='text-danger mt-3 mb-3'>Text note</p>
      <Button variant={VARIANTS.MAIN}>Text</Button>
    </div>
  </>
);
