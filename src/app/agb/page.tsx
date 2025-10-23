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

export default function AGBPage() {
  return (
    <>
      <Header />

     
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/images/office.jpg"
          alt="AGB"
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
            AGB
          </motion.h1>
        </div>
      </section>

      <main className={`p-6 max-w-5xl mx-auto text-gray-700 leading-relaxed space-y-6 ${poppins.className}`}>
                <h2 className="text-2xl font-semibold">Allgemeine Geschäftsbedingungen (AGB)</h2>
        <p>
          Zweck der vorliegenden Allgemeinen Nutzungsbedingungen ist es, die Bedingungen für die Erbringung und Nutzung von „Metis Origins“, die unter folgenden Domains handeln: „metisOrigins.com“, „metisiq.de“, „Metis.gg“ zu regeln.
        </p>
        <p>
          Diese Allgemeinen Geschäftsbedingungen bilden zusammen mit den geltenden Besonderen Nutzungsbedingungen und allen Dokumenten, auf die sie Bezug nehmen, einen einzigen Vertrag (im Folgenden Vertrag genannt), zwischen der Firma „Metis Origins – Einzelunternehmen Marcel Barth“ (im Folgenden „Anbieter“ genannt), und jeder natürlichen oder juristischen Person, Verbraucher oder Unternehmer, die sich für Produkte der Firma „Meits Origins“ interessieren und / oder abschließen (im Folgenden „Kunde“ genannt). Der Kunde und der Anbieter werden einzeln als „Partei“ und gemeinsam als „Parteien“ bezeichnet.
        </p>

        {/* §1 Geltungsbereich */}
        <h2 className="text-2xl font-semibold">§1 Geltungsbereich</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Die AGB gelten für alle Verträge, Angebote, Lieferungen und Leistungen des Anbieters, sofern nicht ausdrücklich etwas Abweichendes vereinbart wurde. Sie gelten auch für zukünftige Geschäftsbeziehungen, selbst wenn sie nicht erneut ausdrücklich vereinbart werden.</li>
          <li>Abweichende Bedingungen des Kunden gelten nur, wenn der Anbieter ihrer Geltung ausdrücklich schriftlich zustimmt. Dies gilt auch, wenn der Anbieter in Kenntnis abweichender Bedingungen des Kunden seine Leistungen vorbehaltlos erbringt.</li>
          <li>Die AGB regeln insbesondere die Vertragsgrundlagen, die Nutzung der individuellen Dienstleistungen wie z.B. Websiteentwicklung, Logo Design & Animation, Website Hosting (managed), Zahlungsbedingungen, Haftungsbeschränkungen, Datenschutz und Kündigung.</li>
          <li>Die Nutzung der individuellen Dienstleistungen setzt die Zustimmung des Kunden zu diesen AGB voraus. Bei der Registrierung oder Bestellung der individuellen Dienstleistungen erklärt der Kunde, dass er die AGB gelesen, verstanden und akzeptiert hat.</li>
          <li>Der Vertrag zwischen dem Anbieter und dem Kunden kommt zustande, wenn der Kunde die Bestellung der individuellen Dienstleistungen beim Anbieter aufgibt und der Anbieter die Bestellung bestätigt oder die Leistungen erbringt. Der Anbieter ist frei in der Entscheidung, eine Bestellung anzunehmen oder abzulehnen.</li>
          <li>Mit Vertragsbeendigung hat der Kunde keinen Anspruch mehr auf die Nutzung der individuellen Dienstleistungen. Der Anbieter behält sich das Recht vor, nach Vertragsende sämtliche Kundendaten zu löschen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen gemäß der <a href="/datenschutz" className="text-blue-600 underline">Datenschutzerklärung</a>.</li>
          <li>Diese Klausel regelt den Verzicht des Kunden auf sein gesetzliches Widerrufsrecht im Zusammenhang mit individuellen Dienstleistungen, die von dem Anbieter angeboten werden.</li>
          <li>Der Verzicht auf das Widerrufsrecht gilt ausschließlich für Verträge über individuelle Dienstleistungen und betrifft nicht andere Waren oder Dienstleistungen, die nicht individuell angepasst wurden. Der Verzicht tritt in Kraft, sobald der Vertrag über die individuellen Dienstleistungen zwischen dem Kunden und dem Anbieter abgeschlossen wurde.</li>
        </ol>

        {/* §2 Vertragsgegenstand */}
        <h2 className="text-2xl font-semibold">§2 Vertragsgegenstand</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Der Vertragsgegenstand umfasst die Bereitstellung von individuellen Dienstleistungen durch den Anbieter für den Kunden gemäß den vereinbarten Leistungsbeschreibungen und Spezifikationen.</li>
          <li>Die genauen Leistungen, wie Source-Datei, Pixel, technische Spezifikationen und weitere spezifische Merkmale der individuellen Dienstleistungen, werden in einem individuellen Vertrag, Angebot, Auftragsbestätigung oder Rechnung festgelegt.</li>
          <li>Der Kunde ist verantwortlich für die ordnungsgemäße Nutzung der individuellen Dienstleistungen gemäß den geltenden gesetzlichen Bestimmungen, insbesondere im Hinblick auf Urheberrecht, Markenrecht, Datenschutz und andere relevante Vorschriften. Falls nicht anders im Vertrag beschrieben gelten einfache Nutzungsrechte für die individuellen Dienstleistungen.</li>
          <li>Der Anbieter behält sich das Recht vor, gerichtliche Schritte einzuleiten, wenn der Kunde gegen die AGB oder geltendes Recht verstößt.</li>
          <li>Der Kunde hat keinen Anspruch auf Übertragung oder Weitergabe der individuellen Dienstleistungen an Dritte ohne vorherige schriftliche Zustimmung des Anbieters.</li>
        </ol>

        {/* §3 Preise und Zahlungsbedingungen */}
        <h2 className="text-2xl font-semibold">§3 Preise und Zahlungsbedingungen</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Die Preise für die individuellen Dienstleistungen werden in der jeweils aktuellen Preisliste oder im individuellen Vertrag festgelegt. Alle Preise verstehen sich in Euro und sind Nettopreise, sofern nicht anders angegeben. Sie können der Umsatzsteuer gemäß den geltenden gesetzlichen Bestimmungen unterliegen.</li>
          <li>Die Zahlungsbedingungen werden im individuellen Vertrag oder in der Rechnung festgelegt. Sofern nichts anderes vereinbart wurde, sind die Rechnungen des Anbieters innerhalb eines festgelegten Zahlungsziels ohne Abzug fällig.</li>
          <li>Im Falle eines Zahlungsverzugs ist der Anbieter berechtigt, Verzugszinsen in Höhe von 9 % über dem Basiszinssatz zu verlangen. Darüber hinaus behält sich der Anbieter das Recht vor, den Fortschritt der Dienstleistungen zu pausieren und den damit verbundenen Dienstleistungen einzuschränken oder vorübergehend auszusetzen, bis alle fälligen Zahlungen beglichen sind. Die Geltendmachung weiterer Verzugsschäden bleibt hiervon unberührt. Die Mahnkosten belaufen sich pro Schreiben auf 5 Euro.</li>
          <li>Der Anbieter behält sich das Recht vor, die monatlichen Gebühren nach eigenem Ermessen anzupassen. Der Kunde wird über solche Preisanpassungen mindestens 14 Tage im Voraus schriftlich informiert. Sollte der Kunde mit einer Preisanpassung nicht einverstanden sein, hat er das Recht, den Vertrag fristgerecht gemäß den Kündigungsbestimmungen zu kündigen.</li>
          <li>Alle Zahlungen sind in der vereinbarten Währung auf das angegebene Bankkonto des Anbieters zu leisten, sofern nicht anders vereinbart. Bei Zahlungen per Lastschriftverfahren oder Kreditkarte ermächtigt der Kunde den Anbieter zur Abbuchung der fälligen Beträge.</li>
          <li>Der Kunde ist nicht berechtigt, Zahlungen zurückzuhalten oder mit eigenen Forderungen gegen Forderungen des Anbieters aufzurechnen, es sei denn, die Gegenforderung des Kunden ist unbestritten oder rechtskräftig festgestellt.</li>
          <li>Bei Nichtzahlung oder wiederholter Zahlungsverzögerung behält sich der Anbieter das Recht vor, die individuellen Dienstleistungen vorübergehend oder endgültig einzustellen und den Vertrag fristlos zu kündigen. Das vereinbarte Entgelt muss vom Kunden dennoch zu 100% beglichen werden.</li>
        </ol>

        {/* §4 Haftung und Gewährleistung */}
        <h2 className="text-2xl font-semibold">§4 Haftung und Gewährleistung</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Der Anbieter haftet für Schäden, die durch Vorsatz oder grobe Fahrlässigkeit seinerseits oder seiner Erfüllungsgehilfen verursacht werden, nach den gesetzlichen Bestimmungen. Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. In diesem Fall ist die Haftung des Anbieters auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</li>
          <li>Der Anbieter übernimmt keine Gewährleistung für die ununterbrochene Verfügbarkeit der individuellen Dienstleistungen, es sei denn, eine solche Gewährleistung wurde ausdrücklich und schriftlich vereinbart.</li>
          <li>Der Kunde ist verpflichtet, seine Daten regelmäßig zu sichern. Der Anbieter haftet nicht für den Verlust von Daten des Kunden, es sei denn, dies beruht auf Vorsatz oder grober Fahrlässigkeit des Anbieters.</li>
          <li>Der Anbieter haftet nicht für Schäden, die durch höhere Gewalt, Streiks, technische Störungen, unbefugte Zugriffe auf das System oder andere Ereignisse außerhalb seiner Kontrolle verursacht werden.</li>
          <li>Der Kunde ist verpflichtet, den Anbieter unverzüglich über etwaige Mängel der individuellen Dienstleistungen zu informieren, damit der Anbieter die Möglichkeit zur Nachbesserung hat.</li>
        </ol>

        {/* §5 Vertragslaufzeit und Kündigung */}
        <h2 className="text-2xl font-semibold">§5 Vertragslaufzeit und Kündigung</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Der Vertrag wird auf unbestimmte Zeit abgeschlossen, sofern keine abweichende Vereinbarung getroffen wurde. Die Vertragslaufzeit beginnt mit dem Datum des Vertragsabschlusses, falls nicht anders geregelt.</li>
          <li>Beide Parteien haben das Recht, den Vertrag unter Einhaltung der vereinbarten Kündigungsfristen zu kündigen. Die Kündigung bedarf der elektronischen Form (E-Mail) an die hinterlegte Adresse im Impressum.</li>
          <li>Der Anbieter behält sich das Recht vor, den Vertrag außerordentlich zu kündigen, wenn der Kunde gegen wesentliche Vertragspflichten verstößt, insbesondere bei Verstößen gegen geltendes Recht, Missbrauch der individuellen Dienstleistungen oder anderen rechtswidrigen Aktivitäten.</li>
          <li>Im Falle einer fristlosen Kündigung durch den Anbieter aufgrund eines Verschuldens des Kunden ist der Anbieter berechtigt, sämtliche offenen Zahlungsforderungen sofort fällig zu stellen.</li>
        </ol>

        {/* §6 Geschäftsfähigkeit */}
        <h2 className="text-2xl font-semibold">§6 Geschäftsfähigkeit</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Der Kunde bestätigt, dass er zum Zeitpunkt des Vertragsschlusses volljährig ist, oder ein gerichtliches Urteil hat für die Fähigkeit Vertragsabschlüsse zu machen und somit die rechtliche Fähigkeit besitzt, rechtsverbindliche Vereinbarungen einzugehen.</li>
          <li>Der Anbieter behält sich das Recht vor, einen Nachweis über das Alter des Kunden zu verlangen, um sicherzustellen, dass dieser die Volljährigkeit erreicht hat oder einen gerichtlichen Beschluss mit der Zustimmung von Vertragsabschlüssen hat. Der Kunde erklärt sich damit einverstanden, auf Anfrage des Anbieters einen geeigneten Altersnachweis, wie beispielsweise eine Kopie des Personalausweises, zu erbringen oder des oben genannten Beschlusses.</li>
          <li>Sofern der Kunde nicht die Volljährigkeit erreicht hat und keinen gerichtlichen Nachweis zur Fähigkeit von Vertragsabschlüssen hat, ist er nicht berechtigt, die individuellen Dienstleistungen in Anspruch zu nehmen. Der Anbieter behält sich das Recht vor, den Vertrag fristlos zu kündigen, falls sich herausstellt, dass der Kunde zum Zeitpunkt des Vertragsschlusses minderjährig war.</li>
        </ol>

        {/* §7 Änderung der AGB */}
        <h2 className="text-2xl font-semibold">§7 Änderung der AGB</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Der Anbieter behält sich das Recht vor, diese AGB jederzeit zu ändern oder zu ergänzen. Die geänderten AGB werden dem Kunden rechtzeitig vor ihrem Inkrafttreten in Textform, beispielsweise per E-Mail oder auf der Firmenwebsite <a href="https://www.metisorigins.com/agb" className="text-blue-600 underline">www.metisorigins.com/agb</a>, mitgeteilt. Die Änderungen gelten als vom Kunden genehmigt, sofern er nicht innerhalb einer Frist von 14 Kalendertagen nach Erhalt der Mitteilung der Änderungen widerspricht.</li>
          <li>Widerspricht der Kunde den geänderten AGB innerhalb 14 Kalendertagen, so kann der Anbieter den Vertrag zum Zeitpunkt des Inkrafttretens der geänderten AGB fristlos kündigen. Der Kunde hat in diesem Fall das Recht, den Vertrag außerordentlich zu kündigen.</li>
          <li>Es liegt in der Verantwortung des Kunden, regelmäßig die aktuellen AGB auf der Webseite des Anbieters einzusehen und sich über Änderungen zu informieren.</li>
          <li>Änderungen oder Ergänzungen des Vertrags bedürfen der elektronischen Form (E-Mail). Dies gilt auch für eine Änderung dieser Klausel selbst.</li>
        </ol>

        {/* §8 Leistungsumfang, Pflichten und Verfügbarkeit */}
        <h2 className="text-2xl font-semibold">§8 Leistungsumfang, Pflichten und Verfügbarkeit</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Die Übertragung von Rechten und Pflichten aus dem Vertrag durch den Kunden bedarf der vorherigen schriftlichen Zustimmung des Anbieters.</li>
          <li>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. Anstelle der unwirksamen Bestimmungen gelten die gesetzlichen Vorschriften.</li>
          <li>Der Anbieter behält sich das Recht vor, die individuellen Dienstleistungen ganz oder teilweise an Dritte zu übertragen (nicht an andere Kunden), sofern dies dem Kunden zumutbar ist und die vertraglichen Verpflichtungen sowie die gesetzlichen Bestimmungen der DSGVO dies zulassen, weiterhin gewährleistet sind.</li>
          <li>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Erfüllungsort und ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Sitz des Anbieters, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlichrechtliches Sondervermögen ist.</li>
          <li>Nebenabreden zu diesem Vertrag bestehen nicht. Änderungen und Ergänzungen bedürfen der elektronischen Form (E-Mail).</li>
          <li>Der Anbieter stellt dem Kunden die vereinbarten individuellen Dienstleistungen gemäß den vertraglichen Vereinbarungen zur Verfügung. Der genaue Leistungsumfang ergibt sich aus der jeweiligen Leistungsbeschreibung oder den gesonderten Vereinbarungen zwischen den Parteien.</li>
          <li>Der Anbieter haftet nicht für Verluste, die durch den Kunden entstandene Unterbrechung, Löschung oder Einschränkung der individuellen Dienstleistungen entstehen, es sei denn, dies beruht auf grober Fahrlässigkeit oder Vorsatz seitens des Anbieters.</li>
          <li>Der Kunde ist für die Auswahl der geeigneten individuellen Dienstleistungen entsprechend seinen individuellen Anforderungen verantwortlich. Der Anbieter übernimmt keine Gewährleistung oder Haftung dafür, dass die individuellen Dienstleistungen den spezifischen Anforderungen des Kunden entsprechen oder seinen individuellen Bedürfnissen gerecht werden.</li>
        </ol>

        {/* §9 Verständnis der individuellen Dienstleistungen */}
        <h2 className="text-2xl font-semibold">§9 Verständnis der individuellen Dienstleistungen</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Der Kunde bestätigt, dass er vor Abschluss des Vertrags über die individuellen Dienstleistungen von dem Anbieter ausführlich über die spezifischen Merkmale, Funktionen und Eigenschaften der Dienstleistungen informiert wurde.</li>
          <li>Der Kunde erkennt an, dass die individuellen Dienstleistungen von dem Anbieter entsprechend den individuellen Anforderungen und Vorgaben des Kunden erbracht werden.</li>
          <li>Der Kunde bestätigt, dass er die Konsequenzen des Verzichts auf sein gesetzliches Widerrufsrecht verstanden hat und dass dieser Verzicht ausschließlich die individuellen Dienstleistungen betrifft, die gemäß seinen individuellen Anforderungen angepasst wurden.</li>
        </ol>

        {/* §10 Ausschluss des Widerrufsrechts */}
        <h2 className="text-2xl font-semibold">§10 Ausschluss des Widerrufsrechts</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Gemäß diesem Punkt wird das gesetzliche Widerrufsrecht des Kunden bei individuellen Dienstleistungen ausdrücklich ausgeschlossen.</li>
          <li>Der Kunde erkennt an und erklärt sich damit einverstanden, dass aufgrund der individuellen Anpassung der Dienstleistungen an seine spezifischen Anforderungen und Vorgaben ein Widerrufsrecht nach Vertragsschluss ausgeschlossen ist.</li>
          <li>Dieser Ausschluss des Widerrufsrechts bezieht sich ausschließlich auf die individuellen Dienstleistungen und hat keine Auswirkungen auf das Widerrufsrecht in Bezug auf andere Waren oder Dienstleistungen, die nicht individuell angepasst wurden.</li>
        </ol>

        {/* §11 Widerrufsformular */}
        <h2 className="text-2xl font-semibold">§11 Widerrufsformular</h2>
        <p>(Wenn Sie den Vertrag widerrufen möchten, füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
        <p>
          An:<br/> [Name/Unternehmen des Verkäufers]<br/>
          [Anschrift des Verkäufers]<br/>
          [PLZ, Ort des Verkäufers]<br/>
          [E-Mail-Adresse des Verkäufers]<br/>
          [Telefonnummer des Verkäufers]
        </p>
        <p>
          Hiermit widerrufe(n) ich/wir () den von mir/uns () abgeschlossenen Vertrag über den Kauf der folgenden Ware(n) / die Erbringung der folgenden Dienstleistung:
        </p>
        <p>
          Bestellt am: [Datum der Bestellung]<br/>
          Erhalten am: [Datum des Erhalts der Ware/Dienstleistung]<br/>
          Name des/der Verbraucher(s):<br/>
          Anschrift des/der Verbraucher(s):<br/>
          Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):<br/>
          Datum: (*) Unzutreffendes streichen
        </p>

        {/* §12 Schlussbestimmungen */}
        <h2 className="text-2xl font-semibold">§12 Schlussbestimmungen</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Soweit in diesem Vertrag auf gesetzliche Vorschriften Bezug genommen wird, sind diese Vorschriften auch maßgeblich, wenn der Vertrag keine entsprechende Regelung enthält.</li>
          <li>Der Kunde erklärt sich damit einverstanden, dass der Anbieter personenbezogene Daten im Rahmen der Vertragsabwicklung erhebt, verarbeitet und speichert. Nähere Informationen hierzu finden sich in der <a href="/datenschutz" className="text-blue-600 underline">Datenschutzerklärung</a> des Anbieters.</li>
          <li>Falls einzelne Bestimmungen dieses Vertrags oder dieser Allgemeinen Geschäftsbedingungen unwirksam sein sollten oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</li>
        </ol>

        <p>© 2024 Metis Origins – Alle Rechte vorbehalten</p>
      </main>

      <Footer />
    </>
  );
}
