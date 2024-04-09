"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy, CopyIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [copySuccess, setCopySuccess] = useState("");

  // Function to copy IP address
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("127.0.0.1");
      setCopySuccess("Copié");
    } catch (err) {
      setCopySuccess("Impossible de copier");
    }
  };

  // Effect to reset copy success message after a few seconds
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => setCopySuccess(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-8">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Dry me doit toujours&nbsp;
            <code className="font-mono font-bold">300 USDT</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://www.youtube.com/watch?v=2dh3Pt2N8Og"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/decrypt.svg"
                alt="Decrypt Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex pt-16 place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/img/title.png"
            alt="Monero SMP"
            width={600}
            height={200}
            priority
          />
        </div>
        <div>
          <p className="text-center lg:px-80 sm:px-32 content-center text-lg text-slate-500">
            Monero SMP [Survival Multiplayer],{" "}
            <span className="font-medium text-slate-800">
              le serveur de l&apos;élite de la finance
            </span>
            . Il a rien payé mais c&apos;est un mégalo donc je met quand même
            son pseudo.
          </p>
        </div>
        <div className="pb-32">
          <Button
            variant="default"
            onClick={() => {
              const section = document.getElementById("card-section-1");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Rejoindre le serveur
          </Button>
        </div>
      </main>
      <div id="card-section-1" className="flex justify-center">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>1. Installer le launcher</CardTitle>
            <CardDescription>
              Pour pouvoir installer les mods facilement et rejoindre le
              serveur, le plus simple est d&apos;utiliser GDLauncher.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pb-8">
              Téléchargez le launcher avec le lien ci-dessous, puis rendez-vous
              à l&apos;étape suivante pour savoir comment installer le mod-pack.
            </p>
            <div className="inline-grid">
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://gdlauncher.com/download/windows")
                }
              >
                Télécharger GDLauncher
              </Button>
              <a
                href="https://gdlauncher.com/"
                className="underline text-sm pt-2"
              >
                Lien du site officiel.
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      <div id="card-section-2" className="flex justify-center pt-16">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>2. Ajouter le mod-pack</CardTitle>
            <CardDescription>
              Pour ajouter le mod-pack sur GDLauncher, cliquez sur le bouton
              ci-dessous.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pb-8">
              Ouvrez GDLauncher et liez votre compte Minecraft au launcher. Une
              fois connecté, cliquez sur le &quot;+&quot; en bas à gauche du
              launcher. Cliquez sur l&apos;onglet &quot;Import zip&quot; et
              sélectionnez le fichier zip que vous venez de télécharger.
            </p>
            <div className="inline-grid">
              <Button
                onClick={() =>
                  (window.location.href =
                    "https://gdlauncher.com/download/windows")
                }
              >
                Télécharger le mod-pack
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div id="card-section-3" className="flex justify-center pt-16">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>3. Rejoindre le serveur</CardTitle>
            <CardDescription>
              Lance le jeu avec GDLauncher frèro, suffit de cliquer sur
              &quot;MSMP&quot;.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pb-8">
              Allez sur &quot;Multiplayer&quot; et ajoutez un serveur.
              L&apos;adresse IP c&apos;est :
            </p>
            {/* Make the div clickable and copy to clipboard on click */}
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 bg-transparent border-none p-0"
            >
              <CopyIcon className="text-slate-500" />
              <code>127.0.0.1</code>
            </button>
            {copySuccess && <p className="text-slate-500">{copySuccess}</p>}
          </CardContent>
        </Card>
      </div>
      <div className="pb-32"></div>
    </div>
  );
}
