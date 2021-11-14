import FullScreenCollapse from "./FullScreenCollapse"

export default {
  title: 'Components/FullScreenCollapse',
  component: FullScreenCollapse
}
const Template = (args) => (<FullScreenCollapse {...args}>
  <div class="container">
    <h1>Hello!</h1>
    <p>This is a looooooooong paragraph.</p>
  </div>
</FullScreenCollapse>)

export const Default = Template.bind({})
Default.args = {
  title: "Fullscreen collaspe",
  toggle: true
}

export const Collapsed = Template.bind({})
Collapsed.args = {
  ...Default.args,
  toggle: false 
}