import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function CofidentialityScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../../assets/images/confidentiality.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={navigation.goBack} activeOpacity={0.5}>
            <Ionicons
              name="return-up-back"
              size={34}
              color={colors.appDarkBlue}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: "grey" }}>
            Folosirea acestei aplicații implica acceptarea condițiilor propuse
            de aplicația Fotbalul Românesc, asa cum sunt descrise mai jos.
            Recomandăm citirea cu atenție a acestora. Dacă nu sunteți de acord
            cu Termenii și Condițiile acestei aplicații, recomandam sa nu o
            folosiți. Această pagină vă informează despre politicile noastre
            privind colectarea, utilizarea și dezvăluirea informațiilor
            personale atunci când utilizați Serviciul nostru. Nu vom folosi sau
            împărtăși informațiile dvs. cu nimeni, cu excepția celor descrise în
            această Politică de confidențialitate. Folosim informațiile oferite
            de dvs. în cadrul acestei aplicații pentru furnizarea și
            îmbunătățirea serviciului. Prin utilizarea Serviciului, sunteți de
            acord cu colectarea și utilizarea informațiilor în conformitate cu
            această politică. Colectarea și utilizarea informațiilor În timp ce
            utilizați Serviciul nostru, vă putem solicita să ne furnizați
            anumite informații de identificare personală care pot fi utilizate
            pentru a vă contacta sau identifica. Informațiile de identificare
            personală („Informații personale”) pot include, dar nu se limitează
            la: Nume Adresa de email Colectăm informațiile pe care smartphone-ul
            dvs. le trimite de fiecare dată când vizitați Serviciul nostru.
            Aceste date de jurnal pot include informații, cum ar fi adresa IP
            Protocol a computerului („IP”), tipul browserului, versiunea
            sistemului de operare, paginile Serviciului nostru pe care le
            vizitați, ora și data vizitei dvs., timpul petrecut pe acele pagini
            și alte statistici. Datele personale sunt prelucrate pe tot
            parcursul utilizării aplicației. Cookie Google AdSense și
            DoubleClick Google, în calitate de furnizor terți, folosește
            cookie-uri pentru a difuza anunțuri pe Serviciul nostru.
            Cookie-urile sunt fișiere cu o cantitate mică de date, care pot
            include un identificator unic anonim. Cookie-urile sunt trimise
            smartphone-ului dvs. și sunt stocate pe in memoria acestuia. Pentru
            a imbunatati serviciul, personaliza si imbunatati experienta, putem
            folosim „cookie-uri” pentru a colecta informații. Putem angaja
            companii terțe și persoane pentru a facilita Serviciul nostru,
            pentru a furniza Serviciul în numele nostru, pentru a efectua
            servicii legate de Serviciu sau pentru a ne ajuta în analizarea
            modului în care este utilizat Serviciul nostru. Aceste terțe părți
            au acces la informațiile furnizate de dvs. numai pentru a efectua
            aceste sarcini în numele nostru și sunt obligați să nu dezvăluie sau
            să le folosească în alt scop. Linkuri către alte site-uri Serviciul
            nostru poate conține legături către alte site-uri care nu sunt
            operate de noi. Dacă faceți clic pe un link terț, veți fi
            direcționat către site-ul terțului. Vă sfătuim să consultați
            Politica de Confidențialitate a fiecărui site pe care îl vizitați.
            Nu avem control asupra și nu ne asumăm nici o responsabilitate
            pentru conținutul, politicile de confidențialitate sau practicile
            site-urilor sau serviciilor terților. Modificări ale acestei
            politici de confidențialitate Este posibil să ne actualizăm Politica
            de Confidențialitate. Vă vom anunța orice modificări prin publicarea
            noii Politici de Confidențialitate pe această pagină. Vi se
            recomandă să consultați periodic această Politică de
            Confidențialitate pentru orice modificări. Modificările aduse
            acestei politici de confidențialitate sunt eficiente atunci când
            sunt postate pe această pagină. Drepturile dvs. În 25 mai 2018
            devine aplicabil Regulamentul European 2016/679 privind protectia
            persoanelor fizice referitor la prelucrarea datelor cu caracter
            personal și libera circulatie a acestor date („Regulamentul”).
            Scopul principal al acestuia este creșterea nivelului de protecție a
            datelor personale și crearea unui climat de încredere care să
            permită fiecărei persoane controlul asupra propriilor date. Astfel,
            considerăm că este un moment potrivit să te informam cum protejam
            datele tale personale și cum ne insusim prevederile Regulamentului.
            Noul Regulament conferă mai multor drepturi persoanelor care
            procesează datele cu caracter personal: Dreptul la informare este
            dreptul Dvs. de a primi informații referitoare la identitatea și
            datele noastre de contact, scopul în care se procesează datele,
            categoriile de date vizate, destinatarii la care ajung datele Dvs.
            prin intermediul nostru, respectiv la existența drepturilor pe care
            le aveți în conformitate cu legislația privind protecția datelor cu
            caracter personal și condițiile în care acestea pot fi exercitate;
            Dreptul de acces înseamnă că aveți dreptul de a obține o confirmare
            din partea noastră pentru prelucrarea datele Dvs. și dacă da, vă
            oferim acces la aceste date și informații despre cum sunt procesate;
            Dreptul la portabilitate se referă la faptul că puteți primi datele
            personale într-un format structurat, care poate fi citit automat și
            la dreptul ca acestea să poată fi transmise altui operator direct;
            Dreptul la opoziție vizează dreptul dumneavoastră de a vă opune
            prelucrării datelor personale; Dreptul la rectificare se referă la
            corectarea fără întârziere a datelor greşite sau care s-au schimbat
            în timp; Dreptul la ștergere / dreptul de a fi uitat înseamnă că
            aveți dreptul să ștergeți datele colectate fără întârziere, în
            oricare dintre următoarele situații: nu mai sunt necesare pentru
            îndeplinirea scopurilor pentru care au fost colectate, ați retras
            consimțământul și nu există alt temei juridic pentru prelucrare, vă
            opuneți prelucrării, datele au fost colectate ilegal, datele trebuie
            șterse pentru respectarea unei obligații legale; Dreptul la
            restricționarea prelucrării poate fi exercitat dacă se contestă
            exactitatea datelor pe o anumită perioadă de timp, suficientă pentru
            verificarea datelor, dacă prelucrarea este ilegală dar nu se dorește
            ștergerea datelor doar restricționarea, în cazul în care aplicația
            Fotbalul Românesc nu mai are nevoie de date dvs personale; Dreptul
            de a nu fi supus unei decizii individuale vă oferă posibilitatea de
            a solicita și de a obține retragerea, anularea sau reevaluarea
            oricărei decizii bazate exclusiv pe prelucrările efectuate prin
            mijloace automate (inclusiv crearea de profiluri); Dreptul de a vă
            adresa justiției sau Autorității Naționale de Supraveghere a
            Prelucrării Datelor cu Caracter Personal poate fi exercitat în cazul
            în care noi am încălcat oricare dintre drepturile garantate de
            legislația aplicabilă în domeniul protecției datelor cu caracter
            personal, ne-ați reclamat abaterea și nu am rectificat sesizare în
            termenul legal. Contacteaza-ne Dacă aveți întrebări cu privire la
            această politică de confidențialitate, vă rugăm să ne contactați.
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
