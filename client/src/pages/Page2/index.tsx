import { Button } from "@components";
import { VARIANTS } from "@enums";

export const Page2 = () => {
  return (
    <div className="container">
      <h2>Heading</h2>
      <div className="d-flex flex-column gap-3 mt-4">
        <div>
          <h6>Label Name</h6>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div>
          <h6>Label Name</h6>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div>
          <h6>Label Name</h6>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div>
          <h6>Label Name</h6>
          <p>Lorem ipsum dolor sit</p>
        </div>
        <div className="d-flex gap-3">
          <div>
            <h6>Label Name</h6>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <h6>Label Name</h6>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div>
            <h6>Label Name</h6>
            <p>Lorem ipsum dolor sit</p>
          </div>
          <div>
            <h6>Label Name</h6>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
      <Button variant={VARIANTS.MAIN} className="mt-2">Lorem ipsum</Button>
    </div>
  );
};
