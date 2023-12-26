import { Subtitle, Text, Title } from "@/components";
import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="space-y-2">
      <Title>Hello World</Title>
      <Subtitle>Subtitle</Subtitle>
      <Text>This is a text</Text>
    </div>
  );
}