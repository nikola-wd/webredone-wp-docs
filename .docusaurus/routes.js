
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','f96'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','d49'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','234'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','bc1'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','b10'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','581'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','89a'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','c17'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','b37'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','2f5'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','b73'),
  exact: true,
},
{
  path: '/docs/doc2',
  component: ComponentCreator('/docs/doc2','7d1'),
  exact: true,
},
{
  path: '/docs/doc3',
  component: ComponentCreator('/docs/doc3','6f8'),
  exact: true,
},
{
  path: '/docs/doc4',
  component: ComponentCreator('/docs/doc4','c80'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
