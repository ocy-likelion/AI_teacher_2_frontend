type ListViewProps = {
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

export default function ListView({ items }: ListViewProps) {
  return <div></div>;
}
