import { Welcome } from "../welcome/welcome";

export function meta() {
    return [
        { title: "React Router Template" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <Welcome />;
}
