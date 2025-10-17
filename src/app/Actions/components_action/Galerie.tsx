"use client"
import {  useState } from "react";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";
import { PlayIcon } from "lucide-react";
import { UsersIcon } from "lucide-react";
import { DownloadIcon } from "lucide-react";
import GVideo from "./GalerieCard";
import GPhoto from "./Galleryphoto";

export default function Gallery(){

    // Un seul état auquel tout les boutons sont liés
    const [Bouttoncolor, setBouttoncolor] = useState("photo")

    return(
        <div className="flex bg-gray-50 gap-3 flex-col items-center pt-20 pb-10 justify-center">
            <div className="flex flex-col pb-2 text-center gap-3">
                <h2 className="text-blue-800 text-3xl font-bold">Galerie Photos & Vidéos</h2>
                <p className="text-gray-500 text-sm">Découvrez nos actions en images et témoignages vidéo</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-1">
                <Button className={`bg-blue-50 hover:bg-white ${Bouttoncolor === "photo" ? "bg-white" : ""}`} onClick={() => {setBouttoncolor("photo")}} >
                    <CameraIcon className="text-blue-800"/>
                    <p className="text-blue-800">Photos</p>
                </Button>
                <Button className={`bg-blue-50 hover:bg-white ${Bouttoncolor === "video" ? "bg-white" : ""}`} onClick={() => {setBouttoncolor("video")}}>
                    <PlayIcon className="text-blue-800" strokeWidth={2.5}/>
                    <p className="text-blue-800">Vidéos</p>
                </Button>
                <Button className={`bg-blue-50 hover:bg-white ${Bouttoncolor === "témoignage" ? "bg-white" : ""}`} onClick={() => {setBouttoncolor("témoignage")}}>
                    <UsersIcon className="text-blue-800" strokeWidth={2.5}/>
                    <p className="text-blue-800">témoignages</p>
                </Button>
            </div>
            {Bouttoncolor === "video" ? (
                <div className=" grid gap-3 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <GVideo
                    imagesrc = {"/caravane.png"}
                    videosrc = {""}
                    title = {"Caravane à Bouaké"}
                    description = {"Sensibilisation dans les marchés"}
                    bluetext = {"Caravane"}
                />
                <GVideo
                    imagesrc = {"/depistage.png"}
                    videosrc = {""}
                    title = {"Dépistage à Yamoussoukro"}
                    description = {"Test gratuits au centre de santé"}
                    bluetext = {"Dépistage"}
                />
                <GVideo
                    imagesrc = {"/Concert.png"}
                    videosrc = {""}
                    title = {"Concert à Abidjan"}
                    description = {"Lévites Inter en concert caritatif"}
                    bluetext = {"Concert"}
                />
                <GVideo
                    imagesrc = {"/formation.png"}
                    videosrc = {""}
                    title = {"Formation des agents"}
                    description = {"Capacitation du personnel médical"}
                    bluetext = {"Formation"}
                />
                <GVideo
                    imagesrc = {"/don.png"}
                    videosrc = {""}
                    title = {"Remise de matériel"}
                    description = {"Don d'équipement médicaux"}
                    bluetext = {"Don"}
                />
                <GVideo
                    imagesrc = {"/education.png"}
                    videosrc = {""}
                    title = {"Sensibilisation jeunes"}
                    description = {"Intervention dans les écoles"}
                    bluetext = {"Education"}
                />
            </div>
            ) : (
                <div className=" grid gap-3 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <GPhoto
                        imagesrc ={"/caravane.png"}
                        title = {"Caravane à Bouaké"}
                        description = {"Sensibilisation dans les marchés"}
                        bluetext={"Caravane"}
                    />
                    <GPhoto
                        imagesrc ={"/depistage.png"}
                        title = {"Dépistage à Yamoussoukro"}
                        description = {"Test gratuits au centre de santé"}
                        bluetext={"Dépistage"}
                    />
                    <GPhoto
                        imagesrc ={"/Concert.png"}
                        title = {"Concert à Abidjan"}
                        description = {"Lévites Inter en concert caritatif"}
                        bluetext={"Concert"}
                    />
                    <GPhoto
                        imagesrc ={"/formation.png"}
                        title = {"Formation des agents"}
                        description = {"Capacitation du personnel médical"}
                        bluetext={"Formation"}
                    />
                    <GPhoto
                        imagesrc ={"/don.png"}
                        title = {"Remise de matériel"}
                        description = {"Don d'équipement médicaux"}
                        bluetext={"Don"}
                    />
                    <GPhoto
                        imagesrc ={"/education.png"}
                        title = {"Sensibilisation jeunes"}
                        description = {"Intervention dans les écoles"}
                        bluetext={"Education"}
                    />
                </div>
            )}
            
            <Button className="bg-white border border-2 border-blue-500 hover:bg-white">
                <DownloadIcon className="text-blue-500" strokeWidth={2.5}/>
                <p className="text-blue-500">Télécharger toutes les photos</p>
            </Button>
        </div>
    )
}