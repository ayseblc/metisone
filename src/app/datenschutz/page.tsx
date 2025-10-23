"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});

export default function DatenschutzPage() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/images/office.jpg"
          alt="Datenschutz"
          fill
          className="object-cover brightness-40"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 ${poppins.className}`}>
          <motion.h1
            className="text-[4rem] md:text-[5.5rem] font-extralight tracking-[0.3em] text-white/90 uppercase"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Datenschutz
          </motion.h1>
        </div>
      </section>

      {/* TEXTBEREICH */}
      <section className="bg-gray-50 py-24 px-6 md:px-24">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-12 space-y-8 md:space-y-10">

         
             <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2"> Datenschutz: </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
               Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und halten uns strikt an die Regeln der Datenschutzgesetze. Personenbezogene Daten werden auf dieser Webseite nur im technisch notwendigen Umfang erhoben. In keinem Fall werden die erhobenen Daten verkauft oder aus anderen Gründen an Dritte weitergegeben.
            </p>
          </div>


          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§1 Verantwortliche Stelle:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Metis Origins – Einzelunternehmen Marcel Barth<br />
              Leibniz-Campus 9<br />
              89520 Heidenheim an der Brenz<br />
              Telefon: +49 176 97780664<br />
              E-Mail: <a href="mailto:hello@metisorigins.com" className="underline text-blue-600">hello@metisorigins.com</a>
            </p>
          </div>

         <div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    §2 Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung:
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed space-y-2">
    Besuch der Website:<br />
    Beim Aufrufen unserer Website{" "}
    <a href="https://www.metisorigins.com" className="underline text-blue-600" target="_blank" rel="noopener noreferrer">
      https://www.metisorigins.com
    </a>{" "}
    werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:<br />
    - IP-Adresse des anfragenden Rechners<br />
    - Datum und Uhrzeit des Zugriffs<br />
    - Name und URL der abgerufenen Datei<br />
    - Website, von der aus der Zugriff erfolgt (Referrer-URL)<br />
    - verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers<br /><br />
    Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:<br />
    - Gewährleistung eines reibungslosen Verbindungsaufbaus der Website<br />
    - Gewährleistung einer komfortablen Nutzung unserer Website<br />
    - Auswertung der Systemsicherheit und -stabilität sowie<br />
    - zu weiteren administrativen Zwecken<br /><br />
    Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung. In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre Person zu ziehen.
  </p>
</div>


          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§3 Datenverarbeitung bei individuellen Verträgen:</h2>
            <p className="text-lg text-gray-700 leading-relaxed space-y-2">
              Im Rahmen individueller Verträge erheben, speichern und verarbeiten wir personenbezogene Daten, die für die Vertragsdurchführung notwendig sind. Diese Daten umfassen unter anderem:<br />
              - Name und Anschrift<br />
              - Kontaktinformationen (z.B. E-Mail-Adresse, Telefonnummer)<br />
              - Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit, Kundenaufträge)<br />
              - Zahlungsinformationen<br /><br />
              Diese Daten werden zur Erfüllung unserer vertraglichen Pflichten und zur Kontaktaufnahme im Rahmen der Vertragsdurchführung benötigt. Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. b DSGVO.
            </p>
          </div>

        <div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
    §4 Nutzung von Software und Drittanbietern
  </h2>
  <ol className="list-decimal list-inside text-lg text-gray-700 space-y-3">
    <li>
      <strong>Flowers Software</strong><br />
      Zur Verwaltung und Organisation unserer Kundenaufträge nutzen wir die Software „Flowers“. In dieser Software werden die oben genannten Daten gespeichert und verarbeitet, um eine effiziente Bearbeitung Ihrer Aufträge zu gewährleisten. Die Software „Flowers“ entspricht den geltenden Datenschutzbestimmungen und bietet angemessene Sicherheitsmaßnahmen zum Schutz Ihrer Daten.
    </li>
    <li>
      <strong>sevDesk für Buchhaltung</strong><br />
      Für die Buchhaltung und Rechnungsstellung verwenden wir die Software „sevDesk“. Ihre personenbezogenen Daten, insbesondere Zahlungsinformationen und Vertragsdaten, werden in „sevDesk“ eingepflegt, um eine ordnungsgemäße Buchführung zu gewährleisten. Auch die Software „sevDesk“ erfüllt die Anforderungen der Datenschutzgesetze und schützt Ihre Daten durch geeignete technische und organisatorische Maßnahmen.
    </li>
    <li>
      <strong>Google Cloud</strong><br />
      Zur Speicherung und Verwaltung von Daten verwenden wir die Dienste der Google Cloud. Google Cloud bietet umfassende Sicherheits- und Datenschutzmaßnahmen, um Ihre Daten zu schützen. Weitere Informationen finden Sie in der{' '}
      <a href="https://cloud.google.com/terms/data-processing-addendum" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
        Datenschutzerklärung
      </a>{' '}
      von Google Cloud.
    </li>
    <li>
      <strong>Dropbox</strong><br />
      Für die Speicherung und gemeinsame Nutzung von Dateien nutzen wir Dropbox. Dropbox setzt ebenfalls hohe Sicherheitsstandards, um die Vertraulichkeit und Integrität Ihrer Daten zu gewährleisten. Weitere Informationen finden Sie in der{' '}
      <a href="https://www.dropbox.com/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
        Datenschutzerklärung
      </a>{' '}
      von Dropbox.
    </li>
  </ol>
</div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§5 Weitergabe von Daten:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn:<br />
              - Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO)<br />
              - die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben<br />
              - für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht<br />
              - dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§6 Cookies:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige Schadsoftware. In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.

Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach Verlassen unserer Seite automatisch gelöscht. Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und welche Eingaben und Einstellungen Sie getätigt haben, um diese nicht noch einmal eingeben zu müssen. Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe §7). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach einer jeweils definierten Zeit automatisch gelöscht. Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich. Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen unserer Website nutzen können.
            </p>
          </div>

        <div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">§7 Analyse-Tools</h2>
  <p className="text-lg text-gray-700 leading-relaxed space-y-2">
    Die im Folgenden aufgeführten und von uns eingesetzten Tracking-Maßnahmen werden auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.<br /><br />

    <strong>Google Analytics</strong><br />
    Wir verwenden Google Analytics, einen Webanalysedienst der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google“). Google Analytics verwendet sogenannte „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter <a href="https://metisorigins.com/privacy/Die%20im%20Folgenden%20aufgef%C3%BChrten%20und%20von%20uns%20eingesetzten%20Tracking-Ma%C3%9Fnahmen%20werden%20auf%20Grundlage%20des%20Art.%206%20Abs.%201%20S.%201%20lit.%20f%20DSGVO%20durchgef%C3%BChrt.%20Mit%20den%20zum%20Einsatz%20kommenden%20Tracking-Ma%C3%9Fnahmen%20wollen%20wir%20eine%20bedarfsgerechte%20Gestaltung%20und%20die%20fortlaufende%20Optimierung%20unserer%20Webseite%20sicherstellen.%20Zum%20anderen%20setzen%20wir%20die%20Tracking-Ma%C3%9Fnahmen%20ein,%20um%20die%20Nutzung%20unserer%20Webseite%20statistisch%20zu%20erfassen%20und%20zum%20Zwecke%20der%20Optimierung%20unseres%20Angebotes%20f%C3%BCr%20Sie%20auszuwerten.%20Diese%20Interessen%20sind%20als%20berechtigt%20im%20Sinne%20der%20vorgenannten%20Vorschrift%20anzusehen.%20%20Google%20Analytics%20Wir%20verwenden%20Google%20Analytics,%20einen%20Webanalysedienst%20der%20Google%20Inc.%20(1600%20Amphitheatre%20Parkway,%20Mountain%20View,%20CA%2094043,%20USA;%20%E2%80%9EGoogle%E2%80%9C).%20Google%20Analytics%20verwendet%20sogenannte%20%E2%80%9ECookies%E2%80%9C,%20Textdateien,%20die%20auf%20Ihrem%20Computer%20gespeichert%20werden%20und%20die%20eine%20Analyse%20der%20Benutzung%20der%20Website%20durch%20Sie%20erm%C3%B6glichen.%20Die%20durch%20den%20Cookie%20erzeugten%20Informationen%20%C3%BCber%20Ihre%20Benutzung%20dieser%20Website%20werden%20in%20der%20Regel%20an%20einen%20Server%20von%20Google%20in%20den%20USA%20%C3%BCbertragen%20und%20dort%20gespeichert.%20Im%20Falle%20der%20Aktivierung%20der%20IP-Anonymisierung%20auf%20dieser%20Website,%20wird%20Ihre%20IP-Adresse%20von%20Google%20jedoch%20innerhalb%20von%20Mitgliedstaaten%20der%20Europ%C3%A4ischen%20Union%20oder%20in%20anderen%20Vertragsstaaten%20des%20Abkommens%20%C3%BCber%20den%20Europ%C3%A4ischen%20Wirtschaftsraum%20zuvor%20gek%C3%BCrzt.%20Nur%20in%20Ausnahmef%C3%A4llen%20wird%20die%20volle%20IP-Adresse%20an%20einen%20Server%20von%20Google%20in%20den%20USA%20%C3%BCbertragen%20und%20dort%20gek%C3%BCrzt.%20Im%20Auftrag%20des%20Betreibers%20dieser%20Website%20wird%20Google%20diese%20Informationen%20benutzen,%20um%20Ihre%20Nutzung%20der%20Website%20auszuwerten,%20um%20Reports%20%C3%BCber%20die%20Websiteaktivit%C3%A4ten%20zusammenzustellen%20und%20um%20weitere%20mit%20der%20Websitenutzung%20und%20der%20Internetnutzung%20verbundene%20Dienstleistungen%20gegen%C3%BCber%20dem%20Websitebetreiber%20zu%20erbringen.%20Die%20im%20Rahmen%20von%20Google%20Analytics%20von%20Ihrem%20Browser%20%C3%BCbermittelte%20IP-Adresse%20wird%20nicht%20mit%20anderen%20Daten%20von%20Google%20zusammengef%C3%BChrt.%20Sie%20k%C3%B6nnen%20die%20Speicherung%20der%20Cookies%20durch%20eine%20entsprechende%20Einstellung%20Ihrer%20Browser-Software%20verhindern;%20wir%20weisen%20Sie%20jedoch%20darauf%20hin,%20dass%20Sie%20in%20diesem%20Fall%20gegebenenfalls%20nicht%20s%C3%A4mtliche%20Funktionen%20dieser%20Website%20vollumf%C3%A4nglich%20werden%20nutzen%20k%C3%B6nnen.%20Sie%20k%C3%B6nnen%20dar%C3%BCber%20hinaus%20die%20Erfassung%20der%20durch%20das%20Cookie%20erzeugten%20und%20auf%20Ihre%20Nutzung%20der%20Website%20bezogenen%20Daten%20(inkl.%20Ihrer%20IP-Adresse)%20an%20Google%20sowie%20die%20Verarbeitung%20dieser%20Daten%20durch%20Google%20verhindern,%20indem%20sie%20das%20unter%20dem%20folgenden%20Link%20verf%C3%BCgbare%20Browser-Plugin%20herunterladen%20und%20installieren:%20https:/tools.google.com/dlpage/gaoptout?hl=de." target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800 underline">hier verfügbare Browser-Plugin herunterladen und installieren</a>.
  </p>
</div>


<div>
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">§8 Social Media Plug-ins</h2>
  <p className="text-lg text-gray-700 leading-relaxed space-y-2">
    Wir setzen auf unserer Website auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO Social Plug-ins der sozialen Netzwerke Facebook, Twitter und Instagram ein, um unser Unternehmen hierüber bekannter zu machen. Der dahinterstehende werbliche Zweck ist als berechtigtes Interesse im Sinne der DSGVO anzusehen. Die Verantwortung für den datenschutzkonformen Betrieb ist durch deren jeweiligen Anbieter zu gewährleisten. Die Einbindung dieser Plug-ins durch uns erfolgt im Wege der sogenannten Zwei-Klick-Methode, um Besucher unserer Webseite bestmöglich zu schützen.<br /><br />

    <strong>Facebook</strong><br />
    Auf unserer Website kommen Social-Media Plugins von Facebook zum Einsatz, um deren Nutzung persönlicher zu gestalten. Hierfür nutzen wir den „LIKE“ oder „TEILEN“-Button. Es handelt sich dabei um ein Angebot von Facebook. Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plugin enthält, baut Ihr Browser eine direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des Plugins wird von Facebook direkt an Ihren Browser übermittelt und von diesem in die Webseite eingebunden. Durch die Einbindung der Plugins erhält Facebook die Information, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, auch wenn Sie kein Facebook-Konto besitzen oder gerade nicht bei Facebook eingeloggt sind. Diese Information (einschließlich Ihrer IP-Adresse) wird von Ihrem Browser direkt an einen Server von Facebook in den USA übermittelt und dort gespeichert. Sind Sie bei Facebook eingeloggt, kann Facebook den Besuch unserer Website Ihrem Facebook-Konto direkt zuordnen. Wenn Sie mit den Plugins interagieren, zum Beispiel den „LIKE“ oder „TEILEN“-Button betätigen, wird die entsprechende Information ebenfalls direkt an einen Server von Facebook übermittelt und dort gespeichert. Die Informationen werden zudem auf Facebook veröffentlicht und Ihren Facebook-Freunden angezeigt. Facebook kann diese Informationen zum Zwecke der Werbung, Marktforschung und bedarfsgerechten Gestaltung der Facebook-Seiten benutzen. Hierzu werden von Facebook Nutzungs-, Interessen- und Beziehungsprofile erstellt, z. B. um Ihre Nutzung unserer Website im Hinblick auf die Ihnen bei Facebook eingeblendeten Werbeanzeigen auszuwerten, andere Facebook-Nutzer über Ihre Aktivitäten auf unserer Website zu informieren und um weitere mit der Nutzung von Facebook verbundene Dienstleistungen zu erbringen. Wenn Sie nicht möchten, dass Facebook die über unseren Webauftritt gesammelten Daten Ihrem Facebook-Konto zuordnet, müssen Sie sich vor Ihrem Besuch unserer Website bei Facebook ausloggen. Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten durch Facebook sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie bitte den <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0" target="_blank" rel="noopener noreferrer">Datenschutzhinweisen</a> und der <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer "  className="text-blue-600 hover:text-blue-800 underline">Datenschutzerklärung</a> von Facebook.<br /><br />

    <strong>Twitter</strong><br />
    Auf unseren Internetseiten sind Plugins des Kurznachrichtennetzwerks der Twitter Inc. (Twitter) integriert. Die Twitter-Plugins (tweet-Button) erkennen Sie an dem Twitter-Logo auf unserer Seite. <a href="https://publish.twitter.com/#" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800 underline">Eine Übersicht über tweet-Buttons finden Sie hier</a>. Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plugin enthält, wird eine direkte Verbindung zwischen Ihrem Browser und dem Twitter-Server hergestellt. Twitter erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Twitter „tweet-Button“ anklicken, während Sie in Ihrem Twitter-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Twitter-Profil verlinken. Dadurch kann Twitter den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Twitter erhalten. Wenn Sie nicht wünschen, dass Twitter den Besuch unserer Seiten zuordnen kann, loggen Sie sich bitte aus Ihrem Twitter-Benutzerkonto aus. Weitere Informationen hierzu finden Sie in den <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener noreferrer"  className="text-blue-600 hover:text-blue-800 underline">Datenschutzhinweisen</a> und der <a href="https://twitter.com/de/privacy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> von Twitter.<br /><br />

    <strong>Instagram</strong><br />
    Auf unserer Website werden auch sogenannte Social Plugins („Plugins“) von Instagram verwendet, das von der Instagram LLC., 1601 Willow Road, Menlo Park, CA 94025, USA („Instagram“) betrieben wird. Die Plugins sind mit einem Instagram-Logo beispielsweise in Form einer „Instagram-Kamera“ gekennzeichnet. Wenn Sie eine Seite unseres Webauftritts aufrufen, die ein solches Plugin enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Instagram her. Der Inhalt des Plugins wird von Instagram direkt an Ihren Browser übermittelt und in die Seite eingebunden. Durch diese Einbindung erhält Instagram die Information, dass Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen hat, auch wenn Sie kein Instagram-Profil besitzen oder gerade nicht bei Instagram eingeloggt sind. Diese Information (einschließlich Ihrer IP-Adresse) wird von Ihrem Browser direkt an einen Server von Instagram in die USA übermittelt und dort gespeichert. Sind Sie bei Instagram eingeloggt, kann Instagram den Besuch unserer Website Ihrem Instagram-Account unmittelbar zuordnen. Wenn Sie mit den Plugins interagieren, zum Beispiel das „Instagram“-Button betätigen, wird diese Information ebenfalls direkt an einen Server von Instagram übermittelt und dort gespeichert. Die Informationen werden außerdem auf Ihrem Instagram-Account veröffentlicht und dort Ihren Kontakten angezeigt. Wenn Sie nicht möchten, dass Instagram die über unseren Webauftritt gesammelten Daten unmittelbar Ihrem Instagram-Account zuordnet, müssen Sie sich vor Ihrem Besuch unserer Website bei Instagram ausloggen. Weitere Informationen hierzu finden Sie in den <a href="https://help.instagram.com/155833707900388" target="_blank" rel="noopener noreferrer">Datenschutzhinweisen</a> und der <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer"   className="text-blue-600 hover:text-blue-800 underline">Datenschutzerklärung</a> von Instagram.
  </p>
</div>




          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§9 Betroffenenrechte:</h2>
  Sie haben das Recht:<br /><br />

  - gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf. aussagekräftigen Informationen zu deren Einzelheiten verlangen;<br /><br />

  - gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;<br /><br />

  - gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;<br /><br />

  - gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt haben;<br /><br />

  - gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;<br /><br />

  - gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortführen dürfen;<br /><br />

  - gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Unternehmenssitzes wenden.
</div>


          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§10 Widerspruchsrecht:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an <a href="mailto:hello@metisorigins.com" className="underline text-blue-600">hello@metisorigins.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§11 Datensicherheit:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers. Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">§12 Aktualität und Änderung dieser Datenschutzerklärung:</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2024. Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website unter <a href="https://www.metisorigins.com/datenschutz" className="underline text-black-600">www.metisorigins.com/datenschutz</a> von Ihnen abgerufen und ausgedruckt werden.
            </p>
          </div>

          <p className="text-gray-500 text-sm text-center mt-6">
            © 2024 Metis Origins – Alle Rechte vorbehalten
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}
