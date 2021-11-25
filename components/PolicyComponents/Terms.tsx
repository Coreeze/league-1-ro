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

export default function TermsScreen() {
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
            Vă rugăm să citiți cu atenție Termeni de utilizare înainte de a
            utiliza aplicatia Fotbalul Romanesc. Accesul și utilizarea
            aplicatiei este conditionat de acceptarea și respectarea acestor
            Termeni. Acești Termeni se aplică tuturor vizitatorilor,
            utilizatorilor și altor persoane care accesează sau folosesc
            aplicatia Fotbalul Romanesc. Folosirea acestei aplicatii implică
            acceptarea acestor termeni și condiții. Ne rezervăm dreptul de a
            face modificări ale acestor prevederi, fără o notificare prealabilă.
            Operator al operațiunilor online este aplicatia Fotbalul Romanesc.
            Când creați un cont, trebuie să ne furnizați informații corecte si
            complete. Nerespectarea acestui lucru reprezintă o încălcare a
            Termenilor, ceea ce poate duce la rezilierea imediată a contului
            dvs. pe Serviciul nostru. Sunteți responsabil pentru protejarea
            parolei pe care o utilizați pentru a accesa Serviciul și pentru
            orice activități sau acțiuni sub parola dvs., indiferent dacă parola
            dvs. este cu Serviciul nostru sau un serviciu terț. Aplicatia
            Fotbalul Romanesc își rezerva dreptul sa valideze conturile,
            continutul publicat in cadrul aplicatiei prin contactarea pe email.
            SECURITATEA DATELOR PERSONALE Datele dumneavoastra personale vor
            putea fi folosite de către aplicatia Fotbalul Romanesc pentru
            confirmarea contului si in scopul declarat al acestei aplicatii.
            Datele dumneavoastra personale vor putea fi transmise autoritatilor
            in drept cu scopul verificării tranzacțiilor comerciale sau altor
            autoritati in drept pentru efectuarea oricăror verificări
            justificate în baza legii. Datele furnizate de către clienți sunt
            strict confidențiale. Aplicatia Fotbalul Romanesc se angajează in
            fata utilizaotrilor sai sa nu furnizeze aceste date unor terte
            persoane sau companii. Aplicatia Fotbalul Romanesc se obliga sa
            respecte drepturile clientului conferite de Legea 677/2001, iar la
            cererea dumneavoastra sa stearga datele a caror prelucrare nu este
            conforma dispozitiilor Legii nr. 677/2001 privind protectia
            persoanelor cu privire la prelucrarea datelor cu caracter personal
            si libera circulatie a acestor date; sa inceteze prelucrarea datelor
            dumneavoastra personale. Linkuri către alte site-uri web Serviciul
            nostru poate conține legături către site-uri sau servicii web ale
            unor terți care nu sunt deținute sau controlate de acesta. Nu are
            control asupra și nu își asumă nicio responsabilitate pentru
            conținutul, politicile de confidențialitate sau practicile
            site-urilor sau serviciilor web ale unei terțe părți. În plus,
            recunoașteți și sunteți de acord că nu va fi responsabil sau direct,
            direct sau indirect, pentru orice daune sau pierderi cauzate sau
            presupuse a fi cauzate de sau în legătură cu utilizarea sau
            dependența de un astfel de conținut, bunuri sau servicii disponibile
            pe sau prin oricare astfel de site-uri sau servicii web. Vă sfătuim
            să citiți termenii și condițiile și politicile de confidențialitate
            ale oricăror site-uri web sau servicii pe care le vizitați. FRAUDA
            Orice încercare de a accesa date personale ale altui utilizator sau
            de a altera/modifica continutul aplicatiei Fotbalul Romanesc, de a
            afecta serverul pe care rulează site-ul, va fi considerata
            tentativa, aplicatia Fotbalul Romanesc rezervandu-si dreptul de a
            formula plangerea penala împotriva celor care au încercat faptele
            descrise mai sus. Aplicatia Fotbalul Romanesc nu garantează
            calitatea sau intentia continutului publicat de catre utilizatori in
            cadrul platformei si nici calitatea serviciilor oferite de parti
            terte. Pentru activitatea in cadrul platformei utilizatorii isi
            asuma in totalitatea urmarile actiunilor in cazuri de infractiuni,
            abuz sau orice fel de tentativa impotriva legii. LITIGII Aplicatia
            Fotbalul Romanesc, va face tot posibilul ca toate eventualele
            neînțelegeri privind orice tip de disputa intre parti sa fie
            rezolvate pe cale amiabila de catre reprezentanții lor. In cazul in
            care rezolvarea neînțelegerilor nu este posibila pe cale amiabila,
            soluționarea litigiilor va reveni instanței judecatoresti competente
            din România. Contacteaza-ne Dacă aveți întrebări cu privire la
            acești Termeni, vă rugăm să ne contactați.
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}
