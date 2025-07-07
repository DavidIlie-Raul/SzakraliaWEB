import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <>
      <main className="bg-background text-text px-6 py-40">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 text-text">
            Üdvözöl a Szakralia
          </h1>
          <p className="text-2xl text-contrast mb-6">
            Egyedi események és különleges florisztikai készletek — a lelked
            ünnepére.
          </p>
          <Button className="bg-primary hover:bg-secondary/80 text-contrast px-6 py-3 rounded-xl">
            Fedezd fel a kínálatot
          </Button>
        </section>
      </main>
      <section className="bg-background min-h-screen flex text-center p-2.5 pt-2.5 flex-col text-[var(--text)]">
        <h1 className="text-3xl m-5 text-white">A Doua Sectiune</h1>
        <div className="text-1xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <section className="grid md:grid-cols-2 gap-8 mt-16">
          <Card className="bg-secondary shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-text mb-2">
                Rendezvényeink
              </h2>
              <p>
                Szakrális élmények, közösségi események és művészi találkozók
                egyedi hangulattal.
              </p>
            </CardContent>
            <Button className=" m-auto bg-accent hover:bg-primary/80 text-contrast px-6 py-3 rounded-xl max-w-1/2">
              Fedezd fel a kínálatot
            </Button>
          </Card>

          <Card className="bg-secondary shadow-xl">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-text mb-2">
                Florisztikai készletek
              </h2>
              <p>
                Tematikus csomagjaink segítenek megteremteni a béke és szépség
                atmoszféráját.
              </p>
            </CardContent>
            <Button className=" m-auto bg-accent hover:bg-primary/80 text-contrast px-6 py-3 rounded-xl max-w-1/2">
              Fedezd fel a kínálatot
            </Button>
          </Card>
        </section>
      </section>
    </>
  );
}

export default Home;
