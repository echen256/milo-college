
import { expect } from '@esm-bundle/chai';
import { readFile } from '@web/test-runner-commands'; 
import test_table from "./../../../blocks/test-table/test-table.js" 
document.body.innerHTML = await readFile({ path: './mocks/sample_input.html' });
const expected_output = await readFile({ path: './mocks/expected_output.html' });

beforeEach(() => {
    window.gsap = undefined;
    document.head.querySelector('[src="/deps/gsap.min.js"]')?.remove();
  });

describe('Format integrity test', () => {
    it('Checks the output of test table and sees if it matches the expected format described in body.html', async () => {
        test_table(document.body.children[0]) 
        expect(document.body.children[0].outerHTML).to.equal(expected_output)
    });
  });

