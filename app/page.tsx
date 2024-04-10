"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CopyIcon,
  RocketIcon,
  ArchiveIcon,
  Link2Icon,
  BadgeInfoIcon,
  MapPinned,
  Box,
  Mic,
  TreeDeciduous,
  Map,
  SmilePlus,
} from "lucide-react";
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

  // New function to copy the specified text
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Texte copié : " + text); // Feedback to the user, customize as needed
    } catch (err) {
      alert("Impossible de copier"); // Error feedback
    }
  };

  // Effect to reset copy success message after a few seconds
  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => setCopySuccess(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  // Wrap the new copy function to prevent re-creation on each render
  const handleCopyClick = useCallback(() => {
    copyTextToClipboard("TRV9xmkjkfkWKGPNAXcCTWtFLohYoB3rfz");
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-app-background bg-cover filter blur-md"></div>
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>
      </div>
      <main className="relative z-1 flex min-h-screen flex-col items-center justify-between p-8">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex">
          <div className="cursor-pointer" onClick={handleCopyClick}>
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Dry me doit toujours&nbsp;
              <code className="font-mono font-bold">300 USDT</code>
            </p>
          </div>
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
                height={21}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex pt-16 place-items-center z-[1]">
          <Image
            className="relative"
            src="/img/title.png"
            alt="Monero SMP"
            width={600}
            height={200}
            priority
          />
        </div>
        <div>
          <p className="text-center lg:px-80 sm:px-32 content-center text-lg text-slate-600">
            Monero SMP [Survival Multiplayer], le serveur de l&apos;élite de la
            finance.{" "}
            <span className="font-medium text-slate-800">Proximity chat</span>{" "}
            (vocal ingame),{" "}
            <span className="font-medium text-slate-800">mini-map</span>,{" "}
            <span className="font-medium text-slate-800">emotes</span>,{" "}
            <span className="font-medium text-slate-800">backpacks</span>,{" "}
            <span className="font-medium text-slate-800">pierres de TP</span>{" "}
            (comme les Zaap de Dofus),{" "}
            <span className="font-medium text-slate-800">+ de mobs</span>,{" "}
            <span className="font-medium text-slate-800">+ de biomes</span>,{" "}
            <span className="font-medium text-slate-800">+ de stuff</span>,{" "}
            <span className="font-medium text-slate-800">+ de dimensions</span>{" "}
            (Aether, Twilight...). Monero a rien payé mais c&apos;est un mégalo
            donc je mets quand même son pseudo.
          </p>
        </div>
        <div className="pb-32">
          <Button
            className="animate-bounce text-slate-900 h-12 w-48 bg-[url('/img/texture.png')] bg-cover rounded-md border-[#0A402D] border-4"
            variant="default"
            id="rejoindre"
            onClick={() => {
              const section = document.getElementById("rejoindre");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Rejoindre le serveur
          </Button>
        </div>
      </main>
      <div className="z-1 relative px-4">
        <div id="card-section-1" className="flex justify-center">
          <Card className="w-[500px] hover:bg-slate-100/80 transition-all">
            <CardHeader>
              <CardTitle className="flex">
                <RocketIcon className="mr-2" />
                Installer le launcher
              </CardTitle>
              <CardDescription>
                Pour pouvoir installer les mods facilement et rejoindre le
                serveur, le plus simple est d&apos;utiliser GDLauncher.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="pb-8">
                Téléchargez le launcher avec le lien ci-dessous, puis
                rendez-vous à l&apos;étape suivante pour savoir comment
                installer le mod-pack.
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
          <Card className="w-[500px] hover:bg-slate-100/80 transition-all">
            <CardHeader>
              <CardTitle className="flex">
                <ArchiveIcon className="mr-2" />
                Ajouter le mod-pack
              </CardTitle>
              <CardDescription>
                Pour ajouter le mod-pack sur GDLauncher, cliquez sur le bouton
                ci-dessous.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="pb-8">
                Ouvrez GDLauncher et liez votre compte Minecraft au launcher.
                Une fois connecté, une fenêtre devrait s&apos;ouvrir pour vous
                proposer de créer ou d&apos;importer une instance. Sélectionnez
                l&apos;onglet pour importer une instance. Cliquez sur{" "}
                <span className="text-slate-500 font-bold">
                  &quot;CurseForge Zip&quot;
                </span>{" "}
                et sélectionnez le fichier zip que vous venez de télécharger.
              </p>
              <div className="inline-grid">
                <a
                  href="https://mega.nz/file/qAUjVD6L#_q-wLlPW2sobaM9Eo9r8Pf0kJJXYbfEm0__1RqSf6Ik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button asChild>
                    <button>Télécharger le mod-pack</button>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        <div id="card-section-3" className="flex justify-center pt-16">
          <Card className="w-[500px] hover:bg-slate-100/80 transition-all">
            <CardHeader>
              <CardTitle className="flex">
                <Link2Icon className="mr-2" />
                Rejoindre le serveur
              </CardTitle>
              <CardDescription>
                Lance le jeu avec GDLauncher frèro, suffit de cliquer sur
                &quot;Monero SMP&quot;.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="pb-4">
                Allez sur &quot;Multiplayer&quot;, et autorisez Minecraft à
                utiliser votre réseau, le serveur devrait déjà être
                pré-configuré, si ça bloque sur &quot;Pinging&quot;, retournez
                au menu du jeu puis de nouveau sur &quot;Multiplayer&quot; si
                vous ne voyez pas de serveur, ajoutez le. L&apos;adresse IP est
                :
              </p>
              {/* Make the div clickable and copy to clipboard on click */}
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 bg-transparent border-none p-0"
              >
                <CopyIcon className="text-slate-500" />
                <code>msmp.minecraft.best</code>
              </button>
              {copySuccess && <p className="text-slate-500">{copySuccess}</p>}
            </CardContent>
          </Card>
        </div>
        <div id="card-section-4" className="flex justify-center pt-16">
          <Card className="w-[500px] hover:bg-slate-100/80 transition-all">
            <CardHeader>
              <CardTitle className="flex">
                <BadgeInfoIcon className="mr-2" />
                Informations supplémentaires
              </CardTitle>
              <CardDescription>
                Shaders et utilisation des mods.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-start py-4 border-t border-b hover:bg-slate-50 transition-all">
              <div className="flex-none w-6">
                <Mic className="h-4 w-full mt-1" />
              </div>
              <p className="flex-grow">
                Pour config le vocal ingame, il faut appuyer sur{" "}
                <span className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-b-4 border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  V
                </span>
                . Vous pouvez choisir et tester votre micro.
              </p>
            </CardContent>
            <CardContent className="flex items-start py-4 border-b hover:bg-slate-50 transition-all">
              <div className="flex-none w-6">
                <TreeDeciduous className="h-4 w-full mt-1" />
              </div>
              <p className="flex-grow">
                Le mod-pack contient également des shaders. Par défaut vous
                pouvez les activer ou désactiver in-game avec{" "}
                <span className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-b-4 border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  K
                </span>
                , ou configurez une autre touche dans les options.
              </p>
            </CardContent>
            <CardContent className="flex items-start py-4 border-b hover:bg-slate-50 transition-all">
              <div className="flex-none w-6">
                <Map className="h-4 w-full mt-1" />
              </div>
              <p className="flex-grow">
                Pour ouvrir la map ingame, la touche par défaut est{" "}
                <span className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-b-4 border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  J
                </span>
                .
              </p>
            </CardContent>
            <CardContent className="flex items-start py-4 border-b hover:bg-slate-50 transition-all">
              <div className="flex-none w-6">
                <SmilePlus className="h-4 w-full mt-1" />
              </div>
              <p className="flex-grow">
                Pour ouvrir la roue des emotes, la touche par défaut est{" "}
                <span className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-b-4 border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  B
                </span>
                .
              </p>
            </CardContent>
            <CardContent className="flex items-start py-4 border-b hover:bg-slate-50 transition-all">
              <div className="flex-none w-6">
                <MapPinned className="h-4 w-full mt-1" />
              </div>
              <p className="flex-grow">
                Vous pouvez créer des waypoints, la touche par défaut est{" "}
                <span className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-b-4 border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  N
                </span>
                . Vous pouvez ensuite les activer ou les désactiver avec{" "}
                <span className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-b-4 border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  W
                </span>
                . Les waypoints servent à enregistrer des emplacements, maison,
                donjon, village... Pour ne pas avoir besoin de noter les
                coordonnées.
              </p>
            </CardContent>
            <CardContent className="flex items-start py-4 hover:bg-slate-50 hover:rounded-b-lg transition-all">
              <div className="flex-none w-6">
                <Box className="h-4 w-full mt-1" />
              </div>
              <p className="flex-grow">
                La totalité des crafts du jeu sont dispo en ouvrant votre
                inventaire, puis clique gauche / droite sur les items dans le
                volet pour voir comment craft, ou ce que vous pouvez craft avec.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="pb-64"></div>
      </div>
    </div>
  );
}
