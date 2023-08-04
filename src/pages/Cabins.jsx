import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://fycirvitqknwxfxhmsxu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-08-04T01%3A32%3A41.340Z"
        alt="cabin"
      />
    </Row>
  );
}

export default Cabins;
