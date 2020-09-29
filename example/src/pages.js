const pages = [
  {
    slug: 'flex',
    title: 'Flex',
    from: 'Flex',
    group: 'Primitives',
    smallCode: `<Flex row w={160} justifyContent="space-between">
      <Flex bg={{phone: "primary:setAlpha:0.5",tablet: "primary"}} w={50} h={50} />
      <Flex bg="primary" opacity={0.5} w={50} h={50} />
    </Flex>`,
    code: ``,
  },
  {
    slug: 'headline',
    title: 'H1',
    from: 'H1',
    group: 'Primitives',
    smallCode: `<H1>H1</H1>`,
    code: ``,
  },
  {
    slug: 'text',
    title: 'Text',
    from: 'Text',
    group: 'Primitives',
    smallCode: `<Text>Text</Text>`,
    code: ``,
  },
  {
    slug: 'button',
    title: 'Button',
    from: 'Button',
    group: 'UI',
    smallCode: `<Button>Button</Button>`,
    code: `<Grid gap={30} min={120}>
      <Button onPress={() => theme.alert({type: "success", message: "Hi"})}>Primary</Button>
      <Button rounded>Rounded</Button>
      <Button light>Light</Button>
      <Button clean>Clean</Button>
      <Button ripple>Ripple</Button>
      <Button bg="primary:darken:10">Darken</Button>
      <Button bg="primary:saturate:20">Saturate</Button>
      <Button bg="error">Error</Button>
      <Button bg="error" light>Light error</Button>
      <Button light loading>Loading</Button>
      <Button  progress={50}>Progress</Button>
    </Grid>`,
  },
  {
    slug: 'alert',
    title: 'Alert',
    from: 'Alert',
    group: 'UI',
    smallCode: `<Button onPress={() => theme.alert({type: "primary",message: "Hi"})} rounded><Icon name="bell" color="#FFF" size={20} /></Button>`,
    code: `<Grid gap={30} min={120}>
      <Button onPress={() => theme.alert({message: "Hi"})}>Clean</Button>
      <Button bg="error"  onPress={() => theme.alert({type: "error", backdrop: true, message: "Hi", timeout: false})}>Error</Button>
      <Button bg="success" onPress={() => theme.alert({type: "success", position: "center", message: "Hi"})}>Success</Button>
      <Button light onPress={() => theme.alert({loading: true, message: "Loading"})}>Loading</Button>
      <Button light onPress={() => theme.alert({ type: "primary", position: "center",confirm: true, backdrop: true, title: "unikit", message: "Do you like unikit?" })}>Confirm</Button>
      <Button light onPress={() => theme.alert({  position: "bottom",actionSheet: true, backdrop: true, actions: [{icon: "zap", label: "Zap"},{icon: "edit", label: "Edit"},{icon: "mapPin", label: "Pin"}] })}>ActionSheet</Button>
    </Grid>`,
  },
  {
    slug: 'dropdown',
    title: 'Dropdown',
    from: 'Dropdown',
    group: 'UI',
    smallCode: `<Flex width="100%" flexCenter><Button rounded><Icon name="chevronDown" color="#FFF" size={20} /></Button></Flex>`,
    code: `<Flex width="100%" flexCenter py={100}><Dropdown
    wrapperProps={{
      w: 250,
      r: 0,
      t: 50
    }}
    content={<><Button width={300} onPress={() => theme.alert({type: "primary",message: "Hi!"})}>Content</Button><Button  width={300} onPress={() => theme.alert({ type: "primary", message: "Hi!"})}>Content</Button></>}>
    <Button><Icon name="chevronDown" color="#FFF" size={20} /></Button>
    </Dropdown></Flex>`,
  },
  {
    slug: 'overlay',
    title: 'Overlay',
    from: 'Overlay',
    group: 'UI',
    smallCode: `<Flex width="100%" flexCenter><Button rounded>Overlay</Button></Flex>`,
    code: `function RenderIcon() {
      const [visible, setVisible] = useState(false);
    
      return (
        <Flex width="100%" flexCenter py={100}>
        <Button  onPress={() => setVisible(true)} rounded>Show</Button>
        <Overlay
          visible={visible}
          onClose={() => setVisible(false)}
        >
          <Button  onPress={() => setVisible(false)}>Close</Button>
        </Overlay>
        </Flex>
      );
    }`,
  },
  {
    slug: 'picker',
    title: 'Picker',
    from: 'Picker',
    group: 'UI',
    smallCode: `<Flex w="80%"><Picker /></Flex>`,
    code: `<Flex><Picker onChange={(value) => console.log({value})} /></Flex>`,
  },
  {
    slug: 'collapsible',
    title: 'Collapsible',
    from: 'Collapsible',
    group: 'UI',
    smallCode: `<Collapsible><Flex bg="primary" w={20} h={20} /></Collapsible>`,
    code: `<Flex><Collapsible><Flex bg="primary" w={100} h={100} /></Collapsible>
    <Collapsible mt={5}><Flex bg="primary" w={100} h={100} /></Collapsible></Flex>`,
  },
  {
    slug: 'tabs',
    title: 'Tabs',
    from: 'Tabs',
    group: 'UI',
    smallCode: `<Tabs w="100%" size={44} options={['Tab 1', 'Tab 2']} />`,
    code: `<Flex align="center">
    <Tabs
      value="Tab 2"
      options={["Tab 1", "Tab 2", "Tab 3"]}
      onChange={value => theme.alert({type: "primary", message: value})}
      indicatorSize={3}
      activeColor="primary"
      inactiveColor="primary:setAlpha:0.5"
      indicatorOffset="100%"
      borderBottomWidth={3}
      borderBottomColor="primary:setAlpha:0.25"
    />
    <Tabs
      mt={50}
      options={[
        { label: "Tab 1", value: 0 },
        { label: "Tab 2", value: 1 }
      ]}
      indicatorSize="100%"
      activeColor="#FFF"
      roundness={40}
    />
    <Tabs
    mt={50}
    roundness={40}
    tabProps={{ripple: true}}
          options={[
            {
              value: '1',
              label: ({ color,active }) => <Icon name="sun" size={20} color={color} animate={active} />,
            },
            {
              value: '2',
              label: ({ color, active }) => (
                <Icon  name="moon" size={20} color={color}  animate={active} />
              ),
            },
          ]}
        />
    <Tabs
      bg="transparent"
      vertical
      mt={50}
      options={["Tab 1", "Tab 2", "Tab 3"]}
      tabProps={{ justifyContent: "flex-start" }}
      roundness={0}
    />
  </Flex>;
  `,
  },
  // //   {
  // //     path: "/group",
  // //     title: "Group",
  // //     from: "Group",
  // //     group: "UI",
  // //     smallCode: `<Group maxWidth="70%"><Button size={40} rounded>Button</Button><Button size={40} rounded>Button</Button></Group>`,
  // //     code: `<Fragment><Flex p={30}>
  // //     <Group gap={1}>
  // //         <Button>Label</Button>
  // //         <Button>Label</Button>
  // //         <Button>Label</Button>
  // //     </Group>
  // // </Flex>
  // // <Flex bg="primary" bgAlpha={0.1} p={30}  align="center">
  // //     <Headline>Welcome back</Headline>
  // //     <Text o={0.5}>Login with your credentials</Text>
  // //     <Form maxWidth={600} buttonProps={{mt: 15}} onSubmit={(doc, reset) => {
  // //         alert(JSON.stringify(doc))
  // //         reset()
  // //     }}>
  // //     <Group mt={30} vertical >
  // //         <Input type="text" placeholder="E-Mail" field="mail" />
  // //         <Input type="text" placeholder="Password" field="pw" />
  // //     </Group>
  // //     </Form>
  // // </Flex><Fragment>`
  // //   },
  {
    slug: 'avatar',
    title: 'Avatar',
    from: 'Avatar',
    group: 'UI',
    smallCode: `<Avatar size={66} char="UK" shadow={10} shadowColor="rgba(0,0,0,0.2)" source={{uri: "https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"}} />`,
    code: `<Flex row wrap alignItems="center" justifyContent="space-around">
    <Avatar bg="primary" char="UK" />
    <Avatar
      size={66}
      shadow={10}
      shadowColor="rgba(0,0,0,0.2)"
      source={{
        uri:
          "https://images.unsplash.com/photo-1506252374453-ef5237291d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      }}
    />
    <Avatar
      size={66}
      char="IK"
      source={{
        uri:
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
      }}
    />
    <Avatar bg="success" darken={0.5} char="IT" />
  </Flex>;`,
  },
  {
    slug: 'icon',
    title: 'Icon',
    from: 'Icon',
    group: 'UI',
    smallCode: `<Icon name="zap" size={50} />`,
    code: `function RenderIcon() {
      const names = Object.keys(icons);
      const [index, setIndex] = useState(0);
      useInterval(() => {
        setIndex((index + 1) % names.length);
      }, 2500);
      return (
        <Flex alignItems="center" w="100%" p={30}>
          <Flex alignItems="center" w="100%" py={50}>
            <Icon size={150} strokeWidth={0.5} name={names[index]} animate />
          </Flex>
          <Grid min={150} w="100%">
            {names
              .sort((a, b) => a > b)
              .map(name => (
                <Flex key={name} flexCenter my={20} w="100%">
                  <Icon name={name} />
                  <Text mt={10}>{name}</Text>
                </Flex>
              ))}
          </Grid>
        </Flex>
      );
    }`,
  },
  {
    slug: 'chart',
    title: 'Chart',
    from: 'Chart',
    group: 'UI',
    smallCode: `<Flex w="100%" h={80}><Chart
    data={[1, 2, 3, 1, 2, 3]}
    height={80}
  >
    <Chart.Line />
  </Chart></Flex>`,
    code: `<Flex p={10}>
    <Flex mt={10}>
      <Chart
        data={[1, 2, 3, 1, 2, 3]}
        xAxis
        yAxis
        yTicks={4}
        height={200}
        wrapperProps={{
          bg: "surface",
          borderRadius: 15,
          shadow: 3,
          mb: 5,
        }}
      >
        <Chart.Grid />
        <Chart.Indicator color="primary:setAlpha:0.5" />
        <Chart.Line />
        
      </Chart>
    </Flex>
    <Flex mt={50}>
      <Chart
      useScaleBand
      xAxis
      
        data={[
          {
            test: 10,
            test2: 12,
          },
          {
            test: 15,
            test2: 5,
          },
          {
            test: 14,
            test2: 33,
          },
          {
            test: 10,
            test2: 12,
          },
          {
            test: 15,
            test2: 5,
          },
          {
            label: "Dez",
            test: 14,
            test2: 33,
          },
          {
            test: 10,
            test2: 12,
          },
          {
            test: 15,
            test2: 5,
          },
          {
            test: 14,
            test2: 33,
            test3: 25,
          },
        ]}
        height={200}
        wrapperProps={{
          bg: "surface",
          borderRadius: 15,
          shadow: 3,
          mb: 5,
        }}
      >

        
        <Chart.Bar
          color="primary:setAlpha:0.1"
          activeColor="primary:setAlpha:0.85"
          activeIndex={8}
          dataKey="test2"
          onChange={({ value, index }) => console.log(value)}
        />
      
        <Chart.Line dataKey="test" showValue gradient={false}  />
        <Chart.Indicator />
      </Chart>
    </Flex>
    <Flex mt={50}>
      <Chart
      useScaleBand
      xAxis
      data={[1, 2, 3, 1, 2, 3]}
        height={200}
        wrapperProps={{
          bg: "surface",
          borderRadius: 15,
          shadow: 3,
          mb: 5,
        }}
      >
      <Chart.Indicator />
        <Chart.Bar
          color="primary:setAlpha:0.1"
          activeColor="primary:setAlpha:0.85"
          activeIndex={4}
          barSize={25}
          onChange={({ value, index }) => console.log(value)}
        />
      
      </Chart>
    </Flex>
    </Flex>`,
  },

  // {
  //   path: "/grid",
  //   title: "Grid",
  //   from: "Grid",
  //   group: "UI",
  //   smallCode: `<Grid w={160} min={50} gap={5}>
  //     <Box bg="primary" w="100%" h={50} />
  //     <Box bg="primary" w="100%" h={50} />
  //     <Box bg="primary" w="100%" h={50} />
  //   </Grid>`,
  //   code: `<Grid w="100%" min={100} gap={5}>
  //   <Box bg="primary" w="100%" h={50} />
  //   <Box bg="primary" w="100%" h={50} />
  //   <Box bg="primary" w="100%" h={50} />
  // </Grid>;`,
  // },
  {
    slug: 'progress',
    title: 'Progress',
    from: 'Progress',
    group: 'UI',
    smallCode: `<Progress size={70} value={66} />`,
    code: `<Flex w="100%" row wrap justifyContent="space-around" alignItems="center">
  
    <Progress
      value={80}
      size={70}
      angle={180}
      formatValue={v => v + "%"}
      showValue
    />
    <Progress
      value={33}
      size={100}
      trackWidth={9}
      progressWidth={6}
      formatValue={v => v + "%"}
      showValue
    />
    <Progress trackWidth={7}
    progressWidth={6} loading />
  </Flex>`,
  },
  {
    slug: 'swiper',
    title: 'Swiper',
    from: 'Swiper',
    group: 'UI',
    smallCode: `<Swiper w={160} h={100} autoplay arrows>
      <Flex bg="primary:setAlpha:0.75" flex={1} />
      <Flex bg="primary:setAlpha:0.5"  flex={1} />
      <Flex bg="primary:setAlpha:0.25"  flex={1} />
    </Swiper>`,
    code: `<Flex>
    <Flex w="100%" h={200}>
      <Swiper itemDimension="50%" flex={1} dots arrows>
      <Flex bg="primary:setAlpha:0.75" flex={1} />
      <Flex bg="primary:setAlpha:0.5"  flex={1} />
      <Flex bg="primary:setAlpha:0.25"  flex={1} />
      </Swiper>
    </Flex>
    <Flex w="100%" h={200}>
      <Swiper
        flex={1}
        vertical
        autoplay
        dots
        dotsProps={{
          roundness: 0,
          trackSize: 2,
          indicatorColor: "#FFF",
          trackColor: "#FFF"
        }}
      >
      <Flex bg="primary:setAlpha:0.75" flex={1} />
      <Flex bg="primary:setAlpha:0.5"  flex={1} />
      <Flex bg="primary:setAlpha:0.25"  flex={1} />
      </Swiper>
    </Flex>
  </Flex>;`,
  },
  // {
  //   path: "/form",
  //   title: "Form",
  //   from: "Form",
  //   group: "Inputs",
  //   smallCode: `<Button>Submit</Button>`,
  //   code: `function form() {
  //     const formRef = useRef(null);
  //     const theme = useTheme();
  //     return (
  //       <Fragment>
  //         <Form
  //           ref={formRef}
  //           onSubmit={(doc, reset) => {
  //             console.log(JSON.stringify(doc));
  //             theme.alert({type: "success", message: "Yeah!"})
  //             //reset()
  //           }}
  //           buttonProps={{ mt: 10 }}
  //         >
  //           <Grid gap={20} min={200}>
  //             <Input
  //               field="text.bla"
  //               w="100%"
  //               type="text"
  //               label="Text"
  //               clean={false}
  //               placeholder="placeholder"
  //               required
  //             />
  //             <Input
  //               field="text.blub"
  //               w="100%"
  //               type="text"
  //               label="Text"
  //               clean={false}
  //               placeholder="placeholder"
  //               required
  //             />
  //           </Grid>
  //           <Input field="range" type="range" label="Slider" />

  //           <Input type="tabs" label="Tabs as select" options={[
  //             { label: "Tab 1", value: 0 },
  //             { label: "Tab 2", value: 1 }
  //           ]} field="tabs" borderRadius={25} />

  //           <Input field="tags" type="tags" label="Tags" value={["Tag"]} />
  //           <Input field="switch" type="switch" label="Switch" />
  //           <Input
  //             field="select"
  //             type="select"
  //             label="Select"
  //             options={["One", "Two"]}
  //           />
  //           <Input
  //             field="multi"
  //             type="multiselect"
  //             label="MultiSelect"
  //             options={["One", "Two"]}
  //           />
  //           <Input
  //             field="multiswtich"
  //             type="multiswitch"
  //             label="MultiSitch"
  //             options={["One", "Two"]}
  //           />
  //           <Input field="number" type="number" label="Number" />
  //           <Input field="checkbox" type="checkbox" label="Checkbox" />
  //           <Input field="date" type="date" label="DatePicker" />
  //           <Input field="color" type="color" label="Color" />
  //         </Form>
  //         <Button mt={15} w={200} onPress={() => formRef.current.submit()}>
  //           Custom trigger
  //         </Button>
  //       </Fragment>
  //     );
  //   }`,
  // },
  {
    slug: 'input',
    title: 'Input',
    from: 'Input',
    group: 'Inputs',
    smallCode: `<Input type="text" label="Sunny" placeholder="text"  inline icon="sun"  />`,
    code: `<Flex w="100%" flexCenter>
      <Form   onSubmit={doc => alert(JSON.stringify(doc))} clean>
      <Input type="text" label="Text" placeholder="text"  field="text" clean needsDoc  />
      <Input type="password" label="Password" placeholder="password"  field="password" clean  />
      <Input type="date" label="Date"  defaultValue={new Date()}  field="date" clean  />
      <Input type="time" label="Time"  defaultValue={new Date()}  field="time" clean  />
      <Input type="datetime" label="Datetime"  defaultValue={new Date()}  field="datetime" clean  />
      <Input type="phone" label="Phone"  field="phone" clean  />
      <Input type="textarea" label="Textarea" placeholder="text"  field="textarea" clean  />
      <Input type="number" label="Number" placeholder="number" defaultValue={0.9}  field="number" clean  />
      <Input type="tabs" label="Tabs" options={["unikit", "is awesome"]}  field="tabs" clean  />
      <Input type="text" label="Inline" placeholder="text" mt={10} field="inline" inline clean  />
      <Input type="switch" mt={10} label="Sunny" placeholder="text" icon="sun" field="switch" clean inline  />
      <Input type="range" mt={10} label="Sunny"  field="range" clean  />
      <Input type="color" mt={10} label="Color"  field="color" clean  />
      <Input type="select" options={["unikit", "is awesome"]} mt={10} label="Select"  field="select" clean  />
      <Input type="select" options={["unikit", "is awesome"]} mt={10} label="Select"  field="selectinline" inline  clean />
      <Input type="select" options={["unikit", "is awesome"]} mt={10} label="MultiSelect with array value"  field="selectpicker" inline picker="switch"  multi clean   />
      <Input type="select" options={[{label:"unikit", value: "unikit"}, {label:"is awesome", value: "awesome"}]} mt={10} label="MultiSelect with object value"  field="selectobject" inline  mode="pills" multi multiType="object" clean   />
      <Input type="text" mt={10} label="Label" placeholder="text" field="normal" clean />
      </Form>
    </Flex>`,
  },
  {
    slug: 'textinput',
    title: 'TextInput',
    from: 'TextInput',
    group: 'Inputs',
    smallCode: `<TextInput placeholder="text" width="80%"  />`,
    code: `<Flex w="100%" flexCenter><TextInput placeholder="text" width="80%"  /></Flex>`,
  },
  {
    slug: 'slider',
    title: 'Slider',
    from: 'Slider',
    group: 'Inputs',
    smallCode: `<Slider w="80%" steps={20} value={30} />`,
    code: `<Flex width="100%" flexCenter>
    <Form button={false}  w="80%">
     <Slider progressColor="success" hideValue={false} my={30}  defaultValue={10} field="s0" />
      <Slider hideValue={false} my={30}  steps={20} defaultValue={20} field="s1" />
      <Slider
        my={30}
   
        defaultValue={20}
        handleFocusOpacity={0.1}
        showTicks={false}
        showValue={false}
        trackHeight={50}
        handleSize={50}
        showHandle={false}
        handleColor="transparent"
        field="s2"
      />
      <Slider my={30} showValue min={20} max={80} formatValue={v => v + "%"}  steps={20} defaultValue={[20, 40]}  field="s3" />
    </Form>
  </Flex>;`,
  },
  {
    slug: 'switch',
    title: 'Switch',
    from: 'Switch',
    group: 'Inputs',
    smallCode: `<Switch value={true} />`,
    code: `<Flex row wrap alignItems="center" justifyContent="space-around">
      <Switch value={true} />
      <Switch value={true} size={60} />
      <Switch value={true} roundness={0} activeTrackColor="success" />
    </Flex>`,
  },
  {
    slug: 'color',
    title: 'Color',
    from: 'Color',
    group: 'Inputs',
    smallCode: `<Form button={false}><Flex w="100%" flexCenter><Color field="color" defaultValue="#673fb4" /></Flex></Form>`,
    code: `<Form button={false}><Flex w="100%" flexCenter><Color field="color" defaultValue="#673fb4" /></Flex></Form>`,
  },
  {
    slug: 'checkbox',
    title: 'Checkbox',
    from: 'Checkbox',
    group: 'Inputs',
    smallCode: `<Checkbox size={40} />`,
    code: `<Checkbox size={40} />`,
  },
  // {
  //   path: "/number",
  //   title: "Number",
  //   from: "Input",
  //   group: "Inputs",
  //   smallCode: `<Input.Number w="80%"  bg="input"/>`,
  //   code: `<Input.Number w="80%"  bg="input"/>`,
  // },
  {
    slug: 'select',
    title: 'Select',
    from: 'Select',
    group: 'Inputs',
    smallCode: `<Select options={["unikit", "is awesome"]} />`,
    code: `<Form button={false}><Select options={["unikit", "is awesome"]} field="select" /></Form>`,
  },
  {
    slug: 'datepicker',
    title: 'DatePicker',
    from: 'DatePicker',
    group: 'Inputs',
    smallCode: `<DatePicker  />`,
    code: `<Form><DatePicker field="date"  /></Form>`,
  },
];

module.exports.pages = pages;
