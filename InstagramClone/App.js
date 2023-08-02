const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
      });
      setFontLoaded(true);
    };
    loadFont();
  }, []);
