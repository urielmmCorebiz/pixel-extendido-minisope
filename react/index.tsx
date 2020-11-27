import { canUseDOM } from 'vtex.render-runtime'
import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {

  switch (e.data.eventName) {
    case "vtex:categoryView": {
      const categoryLength = Number(e.data.products[0].categories.length)
      const category = e.data.products[0].categories[categoryLength-2].split("/")[2];
      //console.log("CATEGORY_NAME", category)

      //dataLayer
      window.dataLayer.push({
        page: "category",
        category: {
          name: category 
        } 
      });

      //Facebook
      fbq('track', 'categoryView', {
        value: category ,
        content_type: 'category',
        contents: category,
        currency: 'MXN'
      });

      break;
    }

    case "vtex:departmentView": {
      const departmentLength = Number(e.data.products[0].categories.length)
      const department = e.data.products[0].categories[departmentLength-1].split("/")[1];
      //console.log("DEPARTMENT_NAME", department)

      //dataLayer
      window.dataLayer.push({
        page: "department",
        category: {
          name: department 
        } 
      });

      //Facebook
      fbq('track', 'departmentView', {
        value: department ,
        content_type: 'department',
        contents: department,
        currency: 'MXN'
      });

      break;
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
