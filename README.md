# xml-get

Command line program to get values from xml using a lodash.get paths.


# usage

Given a the xml file below, you can get values like:

```
$ npx xml-get planes_for_sale.ad[0].year ./test/fixtures/one.xml 
1977
```

## xml file

```xml
<?xml version = "1.0" encoding = "utf-8"?>
<root>
    <planes_for_sale>
        <ad>
            <year> 1977 </year>
            <make> &c; </make>
            <model> Skyhawk </model>
            <color> Light blue and white </color>
            <description> New paint, nearly new interior,
                    685 hours SMOH, full IFR King avionics </description>
            <price> 23,495 </price>
            <seller phone = "555-222-3333"> Skyway Aircraft </seller>
            <location>
                <city> Rapid City, </city>
                <state> South Dakota </state>
            </location>
        </ad>
        <ad>
            <year> 1965 </year>
            <make> &p; </make>
            <model> Cherokee </model>
            <color> Gold </color>
            <description> 240 hours SMOH, dual NAVCOMs, DME, 
                        new Cleveland brakes, great shape </description>
            <seller phone = "555-333-2222"  
                    email = "jseller@www.axl.com">
                    John Seller </seller>
            <location>
                <city> St. Joseph, </city>
                <state> Missouri </state>
            </location>
        </ad>
    </planes_for_sale>
</root>
```