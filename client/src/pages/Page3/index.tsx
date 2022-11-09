import { Button } from '@components';
import { VARIANTS } from '@enums';

export const Page3 = () => {
  return (
    <div className="container">
      <h2>Heading</h2>
      <div className="d-flex flex-column gap-3 mt-4">
        <h6>Label Name</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dolorum reprehenderit soluta enim dicta porro iusto magni dolor
          numquam? Voluptas quaerat porro sunt ex, aut enim. Temporibus ipsa quo
          nisi.
        </p>
        <p className="">Lorem ipsum dolor sit</p>
      </div>
      <Button variant={VARIANTS.MAIN} className="mt-2">
        Lorem ipsum
      </Button>
    </div>
  );
};
