import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

import {getAllCarSlugs, getSingleVehicleBySlug} from '../../lib/api';

export async function getStaticPaths() {
    const slugs = getAllCarSlugs();
    const paths = slugs.map(slug => {
            return {
                params: {
                    id: slug,
                }
            }
    })
    return {
        paths,
        fallback: false,
    };
    }

export async function getStaticProps({params}) {
    const slug = params.id;
    // Get external data from the file system, API, DB, etc.
    const data = getSingleVehicleBySlug(slug);
    
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            data
        }
    }
}

const SingleCarTemplate = ({data}) => {
    const {model, slug} = data;
      return <Layout>
          <h4>
            <Link href="/vehicles">
                &laquo; Back to Vehicles
            </Link>
          </h4>
        <Image
            src={`/vehicles/${slug}/medium.webp`}
            alt={`${model} car`}
            width={350}
            height={185}
        />
        </Layout>
}

export default SingleCarTemplate;