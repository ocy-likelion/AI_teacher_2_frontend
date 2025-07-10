type GridViewProps = {
  items: {
    id: number;
    name: string;
    image: string;
    categories: string[];
    favorite: boolean;
    created_at: string;
    updated_at: string;
  }[];
};

export default function GridView({ items }: GridViewProps) {
  return <div></div>;
}
