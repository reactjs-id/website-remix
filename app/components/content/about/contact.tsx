export const AboutContact = () => {
  return (
    <section className="max-w-7xl w-full px-4 lg:px-16 text-brand-gray-lavender flex flex-col gap-10 lg:gap-12 lg:text-3xl">
      <h2 className="font-semibold text-2xl lg:text-4xl text-white">
        Kontak Kami
      </h2>

      <p className="lg:text-2xl">
        Untuk informasi lebih lanjut atau pertanyaan, jangan ragu untuk
        menghubungi kami melalui email di
        <a href="mailto:contact@reactjs.id">
          <span className="font-medium underline mx-2">contact@reactjs.id</span>
        </a>
        atau melalui platform sosial media kami.
      </p>

      <p className="font-medium text-2xl lg:text-4xl text-white text-center">
        <a href="mailto:contact@reactjs.id">contact@reactjs.id</a>
      </p>
    </section>
  );
};
