import { useRouter } from 'next/router'
import Head from 'next/head'
import { team } from '../content'
import { members } from '../data'
import i18n from '../lib/i18n'

export default function Team() {
    const router = useRouter();
    const t = i18n(router.locale, team);

    return (
        <>
            <Head>
                <title>{t.title}</title>
            </Head>
            <main>
                <h1>{t.title}</h1>
                <p>{t.content.description}</p>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
                    {members.map((member, key) => {
                        return <li className="text-center" key={key}>{member.firstName + " " + member.lastName}</li>
                    })}
                </ul>
                <p>{t.content.recruit}</p>
                <p className="text-center">
                    <a href="mailto:apply@sos-school.org" className="mail">apply@sos-school.org</a>
                </p>
                <p>{t.content.guidance}</p>
            </main>
        </>
    )
}