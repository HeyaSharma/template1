import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import First from './Components/First'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Second from './Components/Second';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='comp'>
    <div className='a'>
      <Container>
        <Row>
        <Col><First image="tech8.jpg" update="Last updated 2 mins ago" title="What are the advantages of this product or service?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, non esse eum, quos beatae magnam praesentium distinctio voluptates porro nulla consectetur necessitatibus aliquid commodi autem at incidunt nesciunt tempora eius.Quae molestias, doloremque, fuga ipsum fugiat libero reprehenderit nam itaque incidunt maxime eveniet quaerat consectetur cumque at quasi aliquam cupiditate numquam debitis reiciendis dolorum! Vitae accusamus asperiores obcaecati nisi eaque!sit reprehenderit doloremque repellendus omnis cupiditate sunt,sit ipsum. A, vero rerum? Maxime exercitationem dolor dolore libero placeat fugiat saepe eaque tempore consequatur. Culpa!"/></Col>
        </Row>
      </Container>
    </div>

    <div className='b'>
    <Container>
      <Row>
        <Col><First image="tech6.jpg"  update="Last updated 1 mins ago" title="You just need to try this new product to be expert" text="Lorem ipsum dolor sit amet cetur lorem ipsum dolor sit amet cetur necessitatibus"/></Col>
        <Col><First image="tech3.jpg"  update="Last updated 2 mins ago" title="After reading the article,you will become a real expert" text="Lorem ipsum dolor sit amet cetur necessitatibus lorem ipsum dolor sit amet cetur necessitatibus "/></Col>
      </Row>
      </Container>
    </div>

    <div className='c'> From the blog<h4>Latest News Portal</h4></div>

    <Container>
      <Row>
        <Col><Second image="tech12.jpg"  update="Last updated 1 mins ago" title="This will help you become the first & strengthen your position"/></Col>
        <Col><Second image="tech7.jpg"  update="Last updated 2 mins ago" title="Technologies that builds YOU"/></Col>
        <Col><Second image="tech9.jpg"  update="Last updated 5 mins ago" title="Opportunity to be a great technician with greater & innovavtive ideas"/></Col>
      </Row>
      <Row>
      <Col><Second image="tech5.jpg"  update="Last updated 4 mins ago" title="You just have to try this for amazing view from space"/></Col>
        <Col><Second image="tech11.jpg" update="Last updated 2 mins ago" title="When you can tell the customer the truth about technology that innovates greatly"/></Col>
        <Col><Second image="tech4.jpg"  update="Last updated 2 mins ago" title="Why these technologies will not leave you indifferent"/></Col>
      </Row>
    </Container>

<div className='d'>MOST READ THIS WEEK
<Container>
      <Row>
        <Col><p><b>Most read articles on technology are:</b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perspiciatis expedita nobis? Provident libero ipsa aperiam exercitationem labore.</p></Col>
        <Col><p><b>Most watched articles on technologies are:</b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perspiciatis expedita nobis? Provident libero ipsa aperiam exercitationem labore.</p></Col>
        <Col><p><b>Most favourites articles on technology are:</b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perspiciatis expedita nobis? Provident libero ipsa aperiam exercitationem labore.</p></Col>
      </Row>
    </Container>
</div>
</div>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
