import ImageButton from '@/app/components/image-button';

export default function Home() {

  const blogs = [
    {
      name: 'Pierre',
      image: 'pierre.jpg',
      link: 'pierre'
    },
    {
      name: 'Martin',
      image: 'martin.jpg',
      link: 'martin'
    },
    {
      name: 'Lara',
      image: 'lara.jpg',
      link: 'lara'
    }
  ];

  return (
    <main className="flex flex-wrap min-h-screen p-24 place-content-center place-items-center">
      {
        blogs.map((blog) => (
          <ImageButton key="blog.link" name={blog.name} link={'/' + blog.link} image={'/' + blog.image} />
        ))
      }
    </main>
  )
}
