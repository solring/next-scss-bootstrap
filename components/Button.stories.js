import Button from "./Button"

export default {
  title: 'Components/Button',
  component: Button
}
const Template = (args) => <Button {...args}>Click me!</Button>
export const Default = Template.bind({})
Default.args = {
  
}