---
title: 'Демонстрация абсолютного позиционирования'
---

import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function ImageWithLinks() {
return (
<div style={{ position: 'relative', display: 'inline-block' }}>
<img src={useBaseUrl('img/img-link.png')} />
<Link to="/page1" style={{ position: 'absolute', top: 130, left:  50 }}>Link 1</Link>
<Link to="/page1" style={{ position: 'absolute', top: 130, left: 180 }}>Link 2</Link>
<Link to="/page1" style={{ position: 'absolute', top: 130, left: 380 }}>Link 2</Link>
</div>
);
}


[//]: # (![]&#40;img/img-link.png&#41;)
