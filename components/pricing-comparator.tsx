import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const tableData = [
  {
    feature: 'Portfolios',
    free: '1',
    pro: '5',
    startup: '15',
  },
  {
    feature: 'Watchlists',
    free: '1',
    pro: '5',
    startup: '15',
  },
  {
    feature: 'Wertpapier-Holdings',
    free: '∞',
    pro: '∞',
    startup: '∞',
  },
  {
    feature: 'Andere Asset-Holdings',
    free: '5',
    pro: '∞',
    startup: '∞',
  },
  {
    feature: 'App-Widgets',
    free: '1',
    pro: '3',
    startup: '3',
  },
  {
    feature: 'Multi-Währungs-Support',
    free: '40+',
    pro: '40+',
    startup: '40+',
  },
  {
    feature: 'Dividendenkalender',
    free: 'Allgemein',
    pro: 'Personalisiert & Prognose',
    startup: 'Personalisiert & Prognose',
  },
  {
    feature: 'Einfacher Datei-Import',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Autosync',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Mobile Apps',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'E-Mail Portfolio-Report',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Verrechnungskonten',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Gesamtübersicht',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Filter-Funktionen',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Notizen-Funktion',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Freie Handelsplatzwahl',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Performance-Analyse',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Dividenden-Dashboard',
    free: true,
    pro: true,
    startup: true,
  },
  {
    feature: 'Angekündigte Dividenden',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Dividenden-Prognose Charts',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Steuer-Dashboard',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Parqet X-Ray',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Performance-Vergleich',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Portfolio Performance Treemap',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Was-wäre-wenn-Vergleich',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'ETF Breakdown auf Asset-Seiten',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Gewichtungsanalyse',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Kapitalflussanalyse',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Transaktionsanalyse',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Assetklassenanalyse',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Drawdown-Analyse',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'ETF-Gebührenanalyse',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Chartanalyse (50-, 100- und 200-Tage-Linie)',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Flexible Zeiträume',
    free: false,
    pro: true,
    startup: true,
  },
  {
    feature: 'Support',
    free: 'Community',
    pro: 'E-Mail',
    startup: 'E-Mail (Priority)',
  },
  {
    feature: 'Multi-Faktor-Authentifizierung',
    free: true,
    pro: true,
    startup: true,
  },
];

export default function PricingComparator() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="w-full overflow-auto lg:overflow-visible">
          <table className="w-[200vw] border-separate border-spacing-x-3 md:w-full dark:[--color-muted:var(--color-zinc-900)]">
            <thead className="bg-background sticky top-4">
              <tr className="*:py-4 *:text-left *:font-medium">
                <th className="lg:w-2/5"></th>
                <th className="space-y-3">
                  <span className="block">Basis</span>

                  <Button asChild variant="outline" size="sm">
                    <Link href="#">Get Started</Link>
                  </Button>
                </th>
                <th className="bg-muted rounded-t-(--radius) space-y-3 px-4">
                  <span className="block">Plus</span>
                  <Button asChild size="sm">
                    <Link href="#">Get Started</Link>
                  </Button>
                </th>
                <th className="space-y-3">
                  <span className="block">Investor</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">Get Started</Link>
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="text-caption text-sm">
              <tr className="*:py-3">
                <td className="flex items-center gap-2 font-medium">
                  <span>Funktionalität</span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {tableData.slice(0, 16).map((row, index) => (
                <tr key={index} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>
                    {row.free === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3">
                      {row.pro === true ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        row.pro
                      )}
                    </div>
                  </td>
                  <td>
                    {row.startup === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.startup
                    )}
                  </td>
                </tr>
              ))}
              <tr className="*:pb-3 *:pt-8">
                <td className="flex items-center gap-2 font-medium">
                  <span>Analyse</span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {tableData.slice(16, 34).map((row, index) => (
                <tr key={index} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>
                    {row.free === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3">
                      {row.pro === true ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        row.pro
                      )}
                    </div>
                  </td>
                  <td>
                    {row.startup === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.startup
                    )}
                  </td>
                </tr>
              ))}
              <tr className="*:pb-3 *:pt-8">
                <td className="flex items-center gap-2 font-medium">
                  <span>Weiteres</span>
                </td>
                <td></td>
                <td className="bg-muted border-none px-4"></td>
                <td></td>
              </tr>
              {tableData.slice(34).map((row, index) => (
                <tr key={index} className="*:border-b *:py-3">
                  <td className="text-muted-foreground">{row.feature}</td>
                  <td>
                    {row.free === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.free
                    )}
                  </td>
                  <td className="bg-muted border-none px-4">
                    <div className="-mb-3 border-b py-3">
                      {row.pro === true ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        row.pro
                      )}
                    </div>
                  </td>
                  <td>
                    {row.startup === true ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      row.startup
                    )}
                  </td>
                </tr>
              ))}
              <tr className="*:py-6">
                <td></td>
                <td></td>
                <td className="bg-muted rounded-b-(--radius) border-none px-4"></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
