import Card from "./Card";
import PaginatedTable from "./PaginatedTable";

function Test() {
  const dummyData: string[][] = [
    ["인영", "010-4222-6836", "inyoung@example.com"],
    ["찬영", "010-4222-6836", "chanyoung@example.com"],
  ];
  return (
    <div>
      <Card
        title={"title"}
        imageUrl={"/vite.svg"}
        width={300}
        height={420}
        rounded={10}
        content={"askjdfsaldkjflasjdflkaalksdfjklasdjflkdjsfsdjlkf"}
        info={"infolskdfjlkasjlfkjsdkfksdjfksdjfsdlkfjlkdjfkldj"}
      />

      <PaginatedTable data={dummyData} />
    </div>
  );
}

export default Test;
