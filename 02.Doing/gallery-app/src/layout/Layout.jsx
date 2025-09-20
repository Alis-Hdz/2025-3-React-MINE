import NavBar from "./NavBar";
import StatusBar from "./StatusBar";

export default function Layout({ children }) {
  /* Se llama igual que el archivo, CHECAR EN GPT EL MOTIVO DEL CHILDREN */

  return (
    <div>
      <header>
        <NavBar />
        <StatusBar />

        <main>
            
            {children}
        
        </main>
      </header>
    </div>
  );
}
