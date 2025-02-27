import { generateMeta } from '@forge42/seo-tools/remix/metadata';

export function meta() {
  return generateMeta({
    title: 'Tickflo - Contact',
    description: 'Simple, open-source helpdesk software',
    url: 'https://tickflo.co/contact',
  });
}

export default function about() {
  return (
    <div className="flex w-full justify-center">
      <div className="prose">
        <h2>Contact us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi varius,
          nibh at interdum blandit, leo est sodales ligula, ac tincidunt enim
          erat id massa. Phasellus aliquam tellus felis, sit amet commodo ligula
          laoreet sed. Sed sed vulputate nibh. Sed non velit dapibus, placerat
          nulla vel, vulputate erat. In consectetur enim nec eleifend sagittis.
          Etiam ante dui, egestas a urna sit amet, rhoncus condimentum dui.
          Curabitur vulputate ante risus, id hendrerit felis suscipit sit amet.
          Proin ipsum turpis, molestie quis nulla sit amet, lobortis suscipit
          neque. Quisque ex felis, varius sit amet ante sit amet, consequat
          volutpat nunc. Vivamus molestie viverra felis, non interdum leo
          tincidunt quis.
        </p>
        <p>
          Vivamus in urna imperdiet, tincidunt leo aliquam, consectetur mi.
          Proin tincidunt, erat nec gravida sollicitudin, augue lacus convallis
          ex, eu fermentum velit mauris quis magna. Quisque lobortis augue eu
          vehicula scelerisque. Ut congue quis lectus id iaculis. Praesent vitae
          malesuada libero, sit amet aliquam purus. Vestibulum aliquet nulla non
          purus accumsan, at lobortis ipsum condimentum. Duis cursus ligula
          tortor, a fermentum justo tristique eu. Cras purus elit, volutpat in
          nulla id, placerat efficitur sapien. Curabitur ut velit quis nulla
          pharetra maximus. Donec elit nulla, maximus sed orci dignissim,
          dignissim lacinia mi. Pellentesque vitae eleifend nunc. Phasellus
          sollicitudin semper eros id maximus. Aliquam tincidunt, nulla et
          ornare rutrum, ante est finibus lacus, at facilisis sapien massa ac
          leo. Aenean sed est et ante vestibulum accumsan ut a urna. Aenean at
          urna id risus tristique hendrerit sed ut diam.
        </p>
        <p>
          Mauris a scelerisque tortor. Donec id quam ac eros pulvinar cursus
          bibendum et nisi. Nulla vel fermentum ante. Quisque maximus vulputate
          risus quis sodales. Maecenas lobortis mi eu bibendum condimentum. Sed
          condimentum dapibus odio. Phasellus vestibulum dignissim lobortis.
          Nullam turpis quam, condimentum aliquet malesuada quis, porttitor eget
          lectus. Fusce tincidunt est id quam venenatis maximus.
        </p>
        <p>
          Integer ornare dolor eu quam fermentum, quis aliquam sapien lacinia.
          Suspendisse justo lorem, luctus eu magna et, pulvinar aliquam arcu.
          Sed interdum metus nec ultricies bibendum. Morbi vitae neque ac orci
          varius feugiat. Aliquam erat volutpat. Quisque sollicitudin placerat
          est eget molestie. Nulla ac metus odio. Aenean imperdiet pellentesque
          erat et malesuada. Phasellus at efficitur purus. Fusce non eleifend
          mauris, eget aliquam enim. Nunc molestie arcu nec elit blandit dictum.
          Proin eget massa imperdiet, sodales tellus vel, ornare urna. Quisque
          eu mauris sit amet neque vestibulum pretium et hendrerit tellus. Donec
          cursus odio non neque euismod, et dictum turpis consectetur.
          Pellentesque et tellus eu augue sodales aliquam. Suspendisse facilisis
          congue lectus.
        </p>
        <p>
          Nullam ipsum ipsum, maximus eu lectus eget, malesuada blandit neque.
          Curabitur scelerisque sed turpis a auctor. Cras posuere fermentum orci
          a euismod. Cras quis auctor massa, id bibendum mi. In et pellentesque
          lorem, id cursus metus. Aliquam pretium cursus bibendum. Pellentesque
          in bibendum sapien. Cras molestie diam in nibh molestie, nec placerat
          risus ullamcorper. Maecenas feugiat aliquet commodo. Nullam nec
          lobortis ipsum, vel lacinia nibh. Phasellus ac euismod dui. Nullam eu
          mattis eros. Sed non placerat tortor, ac dictum mauris. Nunc convallis
          dignissim blandit. Integer laoreet dictum dui, sit amet posuere lectus
          commodo sit amet.
        </p>{' '}
      </div>
    </div>
  );
}
