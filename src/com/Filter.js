import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Conetext";
import "../com/style.css";

const Filters = () => {
  const {
    productState: { byStock, byFastdelivery, sort },
    productDis,
  } = CartState();

  console.log(sort);
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDis({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDis({ type: "SORT_BY_PRICE", payload: "HighToLow" })
          }
          checked={sort === "HighToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDis({ type: "FILTER_BY_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDis({ type: "FILTER_BY_DELIVERY" })}
          checked={byFastdelivery}
        />
      </span>
      <Button
        variant="light"
        onClick={() =>
          productDis({
            type: "CLEAR_FILTER",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
